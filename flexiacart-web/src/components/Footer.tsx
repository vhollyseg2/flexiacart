"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-blue-800">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                Flexia<span className="text-orange-500">Cart</span>
              </span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Formerly <strong>Campus Market</strong> — Now evolved to serve both University Students and City Residents with flexible prices and fast delivery!
            </p>
            <div className="pt-2">
              <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full border border-orange-500/30 font-bold">
                100% Verified Delivery
              </span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Shop Categories</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/" className="hover:text-white transition-colors">Daily Groceries</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Tech & Accessories</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Dorm & Home Essentials</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Provisions & Canned Goods</Link></li>
            </ul>
          </div>

          {/* Standout Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Flexia Features</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/bundles" className="hover:text-white transition-colors">📦 Smart Value Bundles</Link></li>
              <li><Link href="/express" className="hover:text-white transition-colors">⚡ 30-Min Express Delivery</Link></li>
              <li><Link href="/rewards" className="hover:text-white transition-colors">🎁 FlexiRewards Club</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">👥 FlexiGroup Social Buying</Link></li>
            </ul>
          </div>

          {/* Support & Payment */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-3">Customer Support</h3>
            <p className="text-sm text-blue-200 mb-2">Need urgent order assistance?</p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors mb-4"
            >
              💬 WhatsApp Live Support
            </a>
            <div className="flex flex-wrap gap-2 text-[10px] text-blue-300">
              <span className="bg-blue-950 px-2.5 py-1 rounded border border-blue-800">OPay Transfer</span>
              <span className="bg-blue-950 px-2.5 py-1 rounded border border-blue-800">PalmPay</span>
              <span className="bg-blue-950 px-2.5 py-1 rounded border border-blue-800">Paystack / Card</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300 gap-4">
          <p>© 2026 FlexiaCart.com — All rights reserved. Evolved from Campus Market.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
