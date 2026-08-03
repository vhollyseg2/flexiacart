"use client";

import React, { useState } from 'react';
import { Gift, Award, Share2, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function RewardsPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://flexiacart.com/?ref=VIP-8821";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FlexiRewards Loyalty Club & Viral Referral Program</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-blue-900">
          Earn <span className="text-orange-500">FlexiPoints</span> on Every Order
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Whether you shop for your campus dorm or city apartment, get rewarded for every Naira spent and invite friends to earn instant cash bonuses!
        </p>
      </div>

      {/* VIP Gold Card & Referral Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* VIP Gold Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-blue-800">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                VIP Gold Member
              </span>
              <Award className="w-8 h-8 text-orange-400" />
            </div>

            <div>
              <p className="text-xs text-blue-200 uppercase font-bold">Your Available FlexiPoints</p>
              <h2 className="text-4xl font-black text-white mt-1">4,850 PTS</h2>
              <p className="text-xs text-orange-400 font-semibold mt-1">≈ ₦4,850 Store Credit Value</p>
            </div>
          </div>

          {/* Daily Streak */}
          <div className="pt-6 border-t border-blue-800 space-y-2 relative z-10">
            <div className="flex justify-between text-xs font-bold">
              <span>Daily Login Streak</span>
              <span className="text-orange-400">Day 6 of 7</span>
            </div>
            <div className="w-full bg-blue-950 h-2.5 rounded-full overflow-hidden border border-blue-800">
              <div className="bg-orange-500 h-full w-[85%] rounded-full" />
            </div>
            <p className="text-[11px] text-blue-300">
              Log in tomorrow to earn 500 bonus points!
            </p>
          </div>
        </div>

        {/* Viral Referral Card */}
        <div className="lg:col-span-7 bg-orange-500 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase">
              <Gift className="w-4 h-4" />
              <span>Double-Sided Referral Bonus</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              Invite a Friend: You Get ₦1,500, They Get ₦1,500!
            </h2>
            <p className="text-orange-100 text-sm leading-relaxed">
              Share your unique referral link on WhatsApp or SMS. When a friend places their first order of ₦10,000 or more on FlexiaCart, both of your wallets get credited instantly.
            </p>
          </div>

          {/* Share Box */}
          <div className="bg-white text-gray-900 p-3 sm:p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-3 shadow-md">
            <input
              type="text"
              readOnly
              value={referralLink}
              className="w-full sm:flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700"
            />
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-orange-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link!' : 'Copy WhatsApp Link'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* How to Redeem Grid */}
      <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 space-y-6">
        <h3 className="text-xl font-black text-blue-900 text-center">How FlexiPoints Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="text-2xl font-black text-orange-500">1. Shop & Earn</div>
            <p className="text-xs sm:text-sm text-gray-600">
              Earn 5 FlexiPoints for every ₦1,000 spent on groceries, tech, or dorm bundles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="text-2xl font-black text-orange-500">2. Invite Network</div>
            <p className="text-xs sm:text-sm text-gray-600">
              Send your link to flatmates and office friends for 1,500 bonus points each.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
            <div className="text-2xl font-black text-orange-500">3. Instant Checkout</div>
            <p className="text-xs sm:text-sm text-gray-600">
              Use points directly at checkout to pay for delivery fees or get free groceries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
