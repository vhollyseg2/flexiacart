"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'CUSTOMER' | 'SELLER' | 'MODERATOR' | 'ADMIN';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  storeName?: string;
  walletBalance: number;
  flexiPoints: number;
  isVerified: boolean;
}

interface AuthContextType {
  user: UserProfile;
  setRole: (role: UserRole) => void;
  updateWallet: (amount: number) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const defaultUser: UserProfile = {
  id: 'usr_live_8921',
  name: 'Chinedu Okafor',
  email: 'chinedu@flexiacart.com',
  phone: '08123456789',
  role: 'CUSTOMER',
  storeName: 'Chinedu Tech & Groceries Store',
  walletBalance: 48500,
  flexiPoints: 4850,
  isVerified: true,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  useEffect(() => {
    try {
      const savedRole = localStorage.getItem('flexiacart_active_role') as UserRole;
      if (savedRole && ['CUSTOMER', 'SELLER', 'MODERATOR', 'ADMIN'].includes(savedRole)) {
        setUser((prev) => ({ ...prev, role: savedRole }));
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setUser((prev) => ({ ...prev, role: newRole }));
    try {
      localStorage.setItem('flexiacart_active_role', newRole);
    } catch (e) {
      // Ignore
    }
  };

  const updateWallet = (amount: number) => {
    setUser((prev) => ({ ...prev, walletBalance: prev.walletBalance + amount }));
  };

  const logout = () => {
    setRole('CUSTOMER');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setRole,
        updateWallet,
        logout,
        isAuthenticated: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
