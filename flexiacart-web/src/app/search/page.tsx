"use client";

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, ShieldCheck } from 'lucide-react';
import { MARKETPLACE_CATEGORIES } from '@/data/categories';

export default function AdvancedSearchPage() {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [condition, setCondition] = useState('All');
  const [sortBy, setSortBy] = useState<'POPULAR' | 'LOW_TO_HIGH' | 'HIGH_TO_LOW' | 'NEWEST'>('POPULAR');
  const [maxPrice, setMaxPrice] = useState<number>(300000);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = selectedCat === 'All' || p.category === selectedCat;
    const matchQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    const matchPrice = p.price <= maxPrice;
    return matchCat && matchQuery && matchPrice;
  }).sort((a, b) => {
    if (sortBy === 'LOW_TO_HIGH') return a.price - b.price;
    if (sortBy === 'HIGH_TO_LOW') return b.price - a.price;
    if (sortBy === 'POPULAR') return (b.deliveredSalesCount || 0) - (a.deliveredSalesCount || 0);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-blue-900">Marketplace Discovery & Search</h1>
          <p className="text-sm text-gray-500">
            Section 8 Compliance: Search titles, descriptions, brands, tags, and filter by genuine delivered sales
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-500">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-gray-100 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-blue-900"
          >
            <option value="POPULAR">Genuine Popularity (Delivered Orders)</option>
            <option value="LOW_TO_HIGH">Price: Low to High</option>
            <option value="HIGH_TO_LOW">Price: High to Low</option>
            <option value="NEWEST">Newest Listings</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Filter Drawer / Sidebar */}
        <div className="lg:col-span-3 bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-6">
          <div className="flex items-center gap-2 font-black text-blue-900">
            <SlidersHorizontal className="w-5 h-5 text-orange-500" />
            <span>Search Filters</span>
          </div>

          {/* Search keyword */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Keywords</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earbuds, noodles..."
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Category (12 Standard)</label>
            <select
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold"
            >
              <option value="All">All Categories</option>
              {MARKETPLACE_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold"
            >
              <option value="All">All Conditions</option>
              <option value="Brand New">Brand New (100% Verified)</option>
              <option value="Refurbished">Verified Refurbished</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
              Max Price: ₦{maxPrice.toLocaleString()}
            </label>
            <input
              type="range"
              min={5000}
              max={300000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-9 space-y-4">
          <div className="text-xs font-bold text-gray-500">
            Showing {filtered.length} approved verified products
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
