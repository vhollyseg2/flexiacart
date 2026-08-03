"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Search, MapPin, Zap, Package, Gift, Menu, X, MessageSquare, HelpCircle, Bell, Store } from 'lucide-react';

export default function Navbar() {
  const { itemCount, setIsCartOpen, deliveryType, setDeliveryType } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span>🚀 Formerly <strong>Campus Market</strong> — Now serving EVERYONE across Campus & City!</span>
        <span className="hidden md:inline bg-white/20 px-2 py-0.5 rounded-full text-xs">Use code <strong>FLEXIA10</strong> for 10% OFF</span>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 flex items-center justify-center p-1 border border-orange-500/20 group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="FlexiaCart Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-blue-900">
                Flexia<span className="text-orange-500">Cart</span>
              </span>
              <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Campus & City Store</span>
            </div>
          </Link>

          {/* Dual-Audience Delivery Toggle */}
          <div className="hidden lg:flex items-center bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setDeliveryType('CAMPUS')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                deliveryType === 'CAMPUS'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Campus Dorm (₦500)</span>
            </button>
            <button
              onClick={() => setDeliveryType('CITY')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                deliveryType === 'CITY'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>City Residential (₦1,200)</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Indomie, Earbuds, Provisions, Tech..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
            <button className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-500">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/store/chinedu-tech-and-groceries"
              className="hidden xl:flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Store className="w-4 h-4 text-orange-500" />
              <span>Stores</span>
            </Link>
            <Link
              href="/messages"
              className="hidden md:flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-orange-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-orange-500" />
              <span>Chat</span>
            </Link>
            <Link
              href="/notifications"
              className="hidden lg:flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Bell className="w-4 h-4 text-orange-500" />
              <span>Alerts</span>
            </Link>
            <Link
              href="/support"
              className="hidden md:flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-orange-500 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-orange-500" />
              <span>Support</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="bg-white text-orange-500 font-black text-xs px-2 py-0.5 rounded-full shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          {/* Mobile Delivery Switcher */}
          <div className="flex items-center bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => { setDeliveryType('CAMPUS'); setMobileMenuOpen(false); }}
              className={`flex-1 py-2 rounded-lg ${
                deliveryType === 'CAMPUS' ? 'bg-orange-500 text-white' : 'text-gray-600'
              }`}
            >
              Campus Dorm (₦500)
            </button>
            <button
              onClick={() => { setDeliveryType('CITY'); setMobileMenuOpen(false); }}
              className={`flex-1 py-2 rounded-lg ${
                deliveryType === 'CITY' ? 'bg-blue-900 text-white' : 'text-gray-600'
              }`}
            >
              City Residential (₦1,200)
            </button>
          </div>

          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-gray-800 hover:bg-orange-50"
            >
              🛒 Storefront Marketplace
            </Link>
            <Link
              href="/store/chinedu-tech-and-groceries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-gray-800 hover:bg-orange-50"
            >
              🏬 Public Seller Storefronts
            </Link>
            <Link
              href="/messages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-gray-800 hover:bg-orange-50"
            >
              💬 Buyer–Seller Messaging Hub
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-gray-800 hover:bg-orange-50"
            >
              🛡️ Help & Ticket Support Desk
            </Link>
            <Link
              href="/bundles"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-bold text-gray-800 hover:bg-orange-50"
            >
              📦 Smart Value Bundles (Save 25%)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
