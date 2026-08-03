"use client";

import React, { useState } from 'react';
import { BUNDLES, Bundle } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Package, CheckCircle2, ShoppingCart, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BundlesPage() {
  const { addItem } = useCart();
  const [filter, setFilter] = useState<string>('All');

  const targets = ['All', 'Dorm Students', 'Bachelors', 'Family Home'];

  const filtered = BUNDLES.filter((b) => filter === 'All' || b.targetAudience === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Storefront</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Save up to 25% compared to single items</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-blue-900">
            Smart Value Bundles & Combo Packs
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Pre-packed discounted essentials for dorm freshers, bachelors, and family weekends
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {targets.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === t
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Bundles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((bundle) => (
          <div
            key={bundle.id}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden group"
          >
            {/* Image */}
            <div className="relative h-56 bg-gray-50 overflow-hidden">
              <img
                src={bundle.image}
                alt={bundle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-orange-500 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-sm">
                SAVE {bundle.discountPercent}%
              </span>
              <span className="absolute top-4 right-4 bg-blue-900 text-white font-bold text-xs px-3 py-1.5 rounded-full">
                {bundle.targetAudience}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-black text-blue-900 group-hover:text-orange-500 transition-colors">
                  {bundle.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{bundle.subtitle}</p>

                {/* Items Checklist */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Bundle Includes ({bundle.itemsCount} Items)
                  </span>
                  <ul className="space-y-1 text-xs font-semibold text-gray-700">
                    {bundle.itemsList.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Purchase Bar */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-blue-900">
                    ₦{bundle.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400 line-through">
                    ₦{bundle.originalPrice.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() =>
                    addItem({
                      id: bundle.id,
                      title: bundle.title,
                      price: bundle.price,
                      originalPrice: bundle.originalPrice,
                      image: bundle.image,
                      isBundle: true,
                    })
                  }
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add Bundle</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
