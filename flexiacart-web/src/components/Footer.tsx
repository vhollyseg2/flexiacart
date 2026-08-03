"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-blue-800">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                Flexia<span className="text-orange-500">Cart</span>
              </span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Formerly <strong>Campus Market</strong> — Now evolved to serve both University Students and City Residents with flexible prices, genuine products, and fast delivery!
            </p>
            <div className="pt-2">
              <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full border border-orange-500/30 font-bold">
                100% Genuine Products (Section 20 Compliance)
              </span>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Shop Categories</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/" className="hover:text-white transition-colors">Phones & Laptops</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Electronics & TV</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Home Furniture</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Designer Perfumes</Link></li>
            </ul>
          </div>

          {/* Multi-Vendor Portals */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Portals & Tools</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/seller/apply" className="hover:text-white transition-colors">🚀 Become a Seller</Link></li>
              <li><Link href="/seller/earnings" className="hover:text-white transition-colors">💰 Seller Earnings & Ledger</Link></li>
              <li><Link href="/store/chinedu-tech-and-groceries" className="hover:text-white transition-colors">🏬 Public Storefronts</Link></li>
              <li><Link href="/messages" className="hover:text-white transition-colors">💬 Messaging Hub</Link></li>
            </ul>
          </div>

          {/* Policies & Safety (Section 21) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Trust & Policies</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About FlexiaCart</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Safety & Anti-Scam Rules</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Disputes Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300 gap-4">
          <p>© 2026 FlexiaCart.com — All rights reserved. Built to honest multi-vendor marketplace standards.</p>
          <div className="flex items-center gap-4">
            <Link href="/safety" className="hover:text-white">Safety Rules</Link>
            <Link href="/returns" className="hover:text-white">Refund Policy</Link>
            <Link href="/terms" className="hover:text-white">Seller Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
