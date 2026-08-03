"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'CUSTOMER' | 'SELLER' | 'MODERATOR' | 'ADMIN';
export type SellerAppStatus = 'NONE' | 'PENDING' | 'APPROVED' | 'REJECTED';

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
  sellerAppStatus: SellerAppStatus;
  sellerRejectionReason?: string;
  referralCodeUsed?: string;
}

interface AuthContextType {
  user: UserProfile;
  login: (email: string, phone?: string) => void;
  signup: (data: { name: string; email: string; phone: string; referralCode?: string }) => { success: boolean; message: string };
  submitSellerApplication: (data: { storeName: string; description: string; location: string; productTypes: string; returnTerms: string; pickupInfo: string; contactInfo: string }) => { success: boolean; message: string };
  approveSeller: (storeName: string) => void;
  rejectSeller: (reason: string) => void;
  updateWallet: (amount: number) => void;
  logout: () => void;
  isAuthenticated: boolean;
  canModerate: () => boolean;
  canAdminister: () => boolean;
  isApprovedSeller: () => boolean;
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
  sellerAppStatus: 'APPROVED',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('flexiacart_user_data');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  const saveUser = (newProfile: UserProfile) => {
    setUser(newProfile);
    try {
      localStorage.setItem('flexiacart_user_data', JSON.stringify(newProfile));
    } catch (e) {
      // Ignore
    }
  };

  const login = (email: string, phone?: string) => {
    const updated = { ...user, email: email || user.email, phone: phone || user.phone };
    saveUser(updated);
  };

  const signup = (data: { name: string; email: string; phone: string; referralCode?: string }) => {
    // Section 2: Standard account creation (do NOT ask customer vs seller)
    const newProfile: UserProfile = {
      id: 'usr_' + Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: 'CUSTOMER',
      walletBalance: data.referralCode ? 1500 : 0, // ₦1,500 referral reward
      flexiPoints: 500,
      isVerified: true,
      sellerAppStatus: 'NONE',
      referralCodeUsed: data.referralCode,
    };
    saveUser(newProfile);
    return { success: true, message: '🎉 Account created successfully! You can now shop, message sellers, track orders, and apply to become a seller.' };
  };

  const submitSellerApplication = (data: { storeName: string; description: string; location: string; productTypes: string; returnTerms: string; pickupInfo: string; contactInfo: string }) => {
    // Section 2: Seller application workflow step 1 & 2
    if (!data.storeName || !data.description || !data.returnTerms) {
      return { success: false, message: 'Please complete all required seller application fields.' };
    }
    const updated: UserProfile = {
      ...user,
      storeName: data.storeName,
      sellerAppStatus: 'PENDING',
    };
    saveUser(updated);
    return { success: true, message: '✅ Application submitted! Status: PENDING REVIEW. Administrators & moderators have been notified.' };
  };

  const approveSeller = (storeName: string) => {
    // Step 5 & 6: Administrator approves seller
    const updated: UserProfile = {
      ...user,
      role: 'SELLER',
      storeName: storeName || user.storeName,
      sellerAppStatus: 'APPROVED',
    };
    saveUser(updated);
  };

  const rejectSeller = (reason: string) => {
    const updated: UserProfile = {
      ...user,
      sellerAppStatus: 'REJECTED',
      sellerRejectionReason: reason,
    };
    saveUser(updated);
  };

  const updateWallet = (amount: number) => {
    saveUser({ ...user, walletBalance: user.walletBalance + amount });
  };

  const logout = () => {
    saveUser({
      ...user,
      id: 'guest_' + Date.now(),
      role: 'CUSTOMER',
      sellerAppStatus: 'NONE',
    });
  };

  const canModerate = () => user.role === 'MODERATOR' || user.role === 'ADMIN';
  const canAdminister = () => user.role === 'ADMIN';
  const isApprovedSeller = () => user.sellerAppStatus === 'APPROVED' || user.role === 'SELLER';

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        submitSellerApplication,
        approveSeller,
        rejectSeller,
        updateWallet,
        logout,
        isAuthenticated: true,
        canModerate,
        canAdminister,
        isApprovedSeller,
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
