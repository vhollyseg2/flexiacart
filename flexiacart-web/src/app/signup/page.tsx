"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { UserPlus, ShieldCheck, CheckCircle2, Gift, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function StandardSignupPage() {
  const { signup } = useAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }
    if (!agreed) {
      setError("❌ You must agree to the Terms of Use and Privacy Policy.");
      return;
    }
    setError('');
    const res = signup({ name, email, phone, referralCode });
    if (res.success) {
      setSuccessMsg(res.message);
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Storefront</span>
      </Link>

      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto border border-orange-500/20">
          <UserPlus className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-blue-900">Create Standard Account</h1>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Section 2 Compliance: All users create the same standard account. You can shop, message sellers, save products, and apply to become a seller anytime!
        </p>
      </div>

      {successMsg ? (
        <div className="bg-green-50 border-2 border-green-300 p-6 rounded-3xl text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
          <h3 className="font-black text-green-800 text-lg">{successMsg}</h3>
          <p className="text-xs text-green-700">Redirecting to Marketplace Storefront...</p>
        </div>
      ) : (
        <form onSubmit={handleSignup} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-bold p-3 rounded-xl">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ngozi Okafor"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ngozi@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0913 387 1745"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Password *</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Confirm Password *</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
              Optional Referral Code (Get ₦1,500 Bonus)
            </label>
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              placeholder="e.g. FLEXIA-VIP"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold uppercase"
            />
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed font-semibold">
              I agree to FlexiaCart's <Link href="/terms" className="text-orange-500 underline">Terms of Use</Link> and <Link href="/privacy" className="text-orange-500 underline">Privacy Policy</Link>. I understand that standard accounts can shop and later apply to become a seller.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl text-base shadow-lg transition-all"
          >
            Create Standard Account
          </button>

          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
            Already have an account? <Link href="/login" className="text-blue-900 font-bold underline">Sign In Here</Link>
          </div>
        </form>
      )}
    </div>
  );
}
