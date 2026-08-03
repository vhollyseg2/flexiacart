"use client";

import React from 'react';
import { useAuth, UserRole } from '@/context/AuthContext';
import { ShieldAlert, Store, UserCheck, ShieldCheck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RoleSwitcher() {
  const { user, setRole } = useAuth();
  const pathname = usePathname();

  const roles: { role: UserRole; label: string; icon: React.ReactNode; href: string }[] = [
    { role: 'CUSTOMER', label: 'Customer Storefront', icon: <ShoppingCart className="w-3.5 h-3.5" />, href: '/' },
    { role: 'SELLER', label: 'Seller Portal', icon: <Store className="w-3.5 h-3.5" />, href: '/seller' },
    { role: 'MODERATOR', label: 'Moderator Portal', icon: <UserCheck className="w-3.5 h-3.5" />, href: '/mod' },
    { role: 'ADMIN', label: 'Admin Portal', icon: <ShieldCheck className="w-3.5 h-3.5" />, href: '/admin' },
  ];

  return (
    <div className="bg-gray-900 text-white py-1.5 px-4 border-b border-gray-800 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-orange-500/20 text-orange-400 font-bold px-2 py-0.5 rounded border border-orange-500/30">
            Full-Stack Active Role: <strong>{user.role}</strong>
          </span>
          <span className="hidden sm:inline text-gray-400">
            • Switch portals below to test all multi-vendor & admin features:
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {roles.map((item) => {
            const isActive = user.role === item.role || pathname === item.href;
            return (
              <Link
                key={item.role}
                href={item.href}
                onClick={() => setRole(item.role)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-bold transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
