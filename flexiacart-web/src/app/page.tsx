"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Zap, Package, Gift, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyExpress, setOnlyExpress] = useState<boolean>(false);

  const categories = ['All', 'Groceries', 'Tech', 'Dorm', 'Provisions'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchExpress = !onlyExpress || p.isExpress30Min;
    return matchCategory && matchExpress;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF5E00_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Official Rebrand Launch Celebration</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              We’ve Outgrown Campus! Welcome to <span className="text-orange-500">FlexiaCart.com</span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl">
              Formerly known as <strong>Campus Market</strong>, we have evolved into a universal online store serving both University Students and City Residents with flexible prices, smart bundles, and guaranteed 30-minute express delivery.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/bundles"
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <Package className="w-5 h-5" />
                <span>Shop Smart Bundles</span>
              </Link>
              <Link
                href="/express"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-orange-400" />
                <span>30-Min Express Hub</span>
              </Link>
            </div>

            {/* Promo Badge */}
            <div className="flex items-center gap-2 text-xs text-orange-300 font-semibold bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>Use promo code <strong>FLEXIA10</strong> at checkout for 10% OFF your entire order!</span>
            </div>
          </div>

          {/* Hero Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl p-6 shadow-2xl border-4 border-orange-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                  🔥 Rebrand Special Feature
                </span>
                <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  25% SAVINGS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=300&q=80"
                  alt="Dorm Freshers Starter Kit"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-black text-blue-900 text-base">Dorm Freshers Starter Kit</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">Noodles, Milk, Extension Board & Study Lamp</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-black text-lg text-orange-500">₦36,500</span>
                    <span className="text-xs text-gray-400 line-through">₦44,000</span>
                  </div>
                </div>
              </div>

              <Link
                href="/bundles"
                className="w-full bg-blue-900 hover:bg-blue-950 text-white text-center py-3 rounded-xl font-bold text-sm block transition-colors"
              >
                View Bundle Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Storefront Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-900">Trending Store Essentials</h2>
            <p className="text-sm text-gray-500">
              Browse groceries, tech, and daily provisions for your dorm or city home
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setOnlyExpress(!onlyExpress)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 border ${
                onlyExpress
                  ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              <Zap className="w-4 h-4 text-orange-400" />
              <span>30-Min Express Only</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
            <Filter className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 text-lg">No products found in this filter</h3>
            <p className="text-sm text-gray-500 mt-1">Try switching to 'All Categories' or turn off Express filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setOnlyExpress(false); }}
              className="mt-4 bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Why FlexiaCart Feature Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-3xl shadow-sm space-y-3">
            <Package className="w-8 h-8 text-white" />
            <h3 className="text-lg font-black">Smart Value Bundles</h3>
            <p className="text-xs sm:text-sm text-orange-100 leading-relaxed">
              Save up to 25% by buying curated grocery and dorm combo packs instead of single items.
            </p>
            <Link href="/bundles" className="inline-block font-bold text-xs underline pt-1">
              Explore Bundles &rarr;
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-6 rounded-3xl shadow-sm space-y-3">
            <Zap className="w-8 h-8 text-orange-400" />
            <h3 className="text-lg font-black">30-Min Express Hub</h3>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              Urgent exam night? Run out of cooking oil? Get guaranteed 30-minute delivery to dorms and town.
            </p>
            <Link href="/express" className="inline-block font-bold text-xs underline pt-1 text-orange-400">
              Open Express Store &rarr;
            </Link>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-sm space-y-3">
            <Gift className="w-8 h-8 text-orange-500" />
            <h3 className="text-lg font-black">FlexiRewards Club</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Earn FlexiPoints on every Naira spent and invite friends to get ₦1,500 bonus cash!
            </p>
            <Link href="/rewards" className="inline-block font-bold text-xs underline pt-1 text-orange-500">
              Join Rewards Club &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
