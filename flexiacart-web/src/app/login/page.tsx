"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { LogIn, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    setSuccess(true);
    setTimeout(() => {
      router.push('/');
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Storefront</span>
      </Link>

      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-blue-900/10 text-blue-900 rounded-2xl flex items-center justify-center mx-auto border border-blue-900/20">
          <LogIn className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-black text-blue-900">Sign In to FlexiaCart</h1>
        <p className="text-xs text-gray-500">
          Access your wishlist, order tracking, messaging, and seller tools
        </p>
      </div>

      {success ? (
        <div className="bg-green-50 border border-green-200 p-6 rounded-2xl text-center font-bold text-green-700">
          ✅ Signed in successfully! Redirecting...
        </div>
      ) : (
        <form onSubmit={handleLogin} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Email or Phone Number</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. chinedu@flexiacart.com or 09133871745"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-950 text-white font-black py-4 rounded-xl text-base shadow-md transition-all"
          >
            Sign In
          </button>

          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
            Don't have an account yet? <Link href="/signup" className="text-orange-500 font-bold underline">Create Standard Account</Link>
          </div>
        </form>
      )}
    </div>
  );
}
