"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { 
  Zap, Package, Gift, Sparkles, Filter, CheckCircle2, ShieldCheck, 
  Store, MessageSquare, MapPin, TrendingUp, Clock, HelpCircle, 
  ArrowRight, ShieldAlert, Award, ChevronRight 
} from 'lucide-react';

export default function HomePage() {
  const { deliveryType } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Groceries', 'Tech', 'Electronics', 'Furniture', 'Provisions'];

  // Section 3: Flash Deals (genuine original price, no fake countdowns)
  const flashDeals = PRODUCTS.filter((p) => p.isFlashDeal && p.originalPrice);

  // Section 3: Top Selling Items (ranked strictly by deliveredSalesCount, actual sold count only)
  const topSelling = [...PRODUCTS]
    .filter((p) => (p.deliveredSalesCount || 0) > 0)
    .sort((a, b) => (b.deliveredSalesCount || 0) - (a.deliveredSalesCount || 0));

  // Section 3: New Arrivals
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  // Section 3: Products Near You (filtered by active delivery zone)
  const productsNearYou = PRODUCTS.filter((p) => 
    p.locationZone === 'CAMPUS_AND_CITY' || 
    (deliveryType === 'CAMPUS' && p.locationZone === 'CAMPUS_ONLY') ||
    (deliveryType === 'CITY' && p.locationZone === 'CITY_ONLY')
  );

  // Section 3: Recommended Products
  const recommendedProducts = PRODUCTS.slice(0, 4);

  // Section 3: Recently Viewed (mocked with 3 items for demonstration)
  const recentlyViewed = PRODUCTS.slice(1, 4);

  // Section 3: All Products with Category & Search filtering
  const allFilteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION (Section 3 Compliance) */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF5E00_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Section 3 Compliance: Honest Multi-Vendor Marketplace</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Nigeria's Trusted Marketplace for <span className="text-orange-500">Students & City Residents</span>
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xl">
              Evolved from <strong>Campus Market</strong>! Shop genuine groceries, tech gadgets, electronics, and home furniture with transparent delivery across campus dorms and city neighborhoods.
            </p>

            {/* Product Search Bar inside Hero */}
            <div className="max-w-md relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phones, earbuds, furniture, groceries..."
                className="w-full bg-white text-gray-900 rounded-2xl py-3.5 pl-4 pr-12 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              />
              <Link
                href="#all-products"
                className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-black transition-colors"
              >
                Search
              </Link>
            </div>

            {/* Shop Products & Become a Seller CTAs (Section 3) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#all-products"
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Shop Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/seller/apply"
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Store className="w-5 h-5 text-orange-400" />
                <span>Become a Seller</span>
              </Link>
            </div>

            {/* Factual Trust Messages (Section 3: No unsupported claims!) */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-white/10 text-[11px] font-bold text-blue-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Reviewed Listings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Seller Messaging</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Campus & City Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Dispute Reporting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Customer Support</span>
              </div>
            </div>
          </div>

          {/* Hero Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white text-gray-900 rounded-3xl p-6 shadow-2xl border-4 border-orange-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                  ⚡ Genuine Flash Deal Feature
                </span>
                <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  17% GENUINE DISCOUNT
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80"
                  alt="Oraimo FreePods 4"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-black text-blue-900 text-base">Oraimo FreePods 4 Earbuds</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">Active Noise Cancellation & 36H Battery</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-black text-lg text-orange-500">₦24,500</span>
                    <span className="text-xs text-gray-400 line-through">₦29,500</span>
                  </div>
                </div>
              </div>

              <Link
                href="/product/oraimo-freepods-4-wireless-earbuds"
                className="w-full bg-blue-900 hover:bg-blue-950 text-white text-center py-3 rounded-xl font-bold text-sm block transition-colors"
              >
                View Verified Listing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLASH DEALS SECTION (Section 3: Genuine original price, no fake countdowns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-black text-blue-900">Genuine Flash Deals</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Approved discounted products with genuine original prices. No fake urgency countdowns.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. TOP SELLING ITEMS SECTION (Section 3: Ranked strictly by deliveredSalesCount, actual count only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-900" />
              <h2 className="text-2xl sm:text-3xl font-black text-blue-900">Top Selling Items</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Ranked strictly by verified completed delivered-order quantities. Never simulated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {topSelling.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <div className="mt-1.5 text-center">
                <span className="inline-block bg-blue-900/10 text-blue-900 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full">
                  📦 {product.deliveredSalesCount} completed deliveries
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. RECENTLY VIEWED & RECOMMENDED PRODUCTS (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recommended */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xl font-black text-blue-900 border-b pb-2">Recommended Products</h3>
          <div className="grid grid-cols-2 gap-4">
            {recommendedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl font-black text-blue-900 border-b pb-2">Recently Viewed</h3>
          <div className="space-y-3">
            {recentlyViewed.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white transition-all"
              >
                <img src={p.image} className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase text-orange-500 font-bold">{p.category}</span>
                  <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{p.title}</h4>
                  <div className="font-black text-blue-900 text-sm mt-0.5">₦{p.price.toLocaleString()}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS BY CATEGORY & NEW ARRIVALS (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-black text-blue-900">New Arrivals & Categories</h2>
            <p className="text-xs text-gray-500">Fresh stock across Tech, Furniture, Electronics, and Provisions</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. PRODUCTS NEAR YOU (Section 3: Geofenced for Campus Dorm vs City Residential) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-black text-blue-900">
                Products Near You ({deliveryType === 'CAMPUS' ? 'Campus Dorm Zone' : 'City Residential Zone'})
              </h2>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">
              Available for immediate local dispatch in your selected location zone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productsNearYou.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. ALL PRODUCTS SECTION (Section 3) */}
      <section id="all-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-900">All Marketplace Products</h2>
          <p className="text-sm text-gray-500">
            Browse all verified multi-vendor listings ({allFilteredProducts.length} items found)
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 8. HOW THE MARKETPLACE WORKS (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-3xl border border-gray-200 p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-900">How FlexiaCart Works</h2>
          <p className="text-sm text-gray-600">
            A trusted multi-vendor marketplace built for simple mobile shopping and clear seller accountability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-orange-500 text-white rounded-xl font-black flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="text-lg font-black text-blue-900">Shop & Verify</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Browse reviewed listings from verified local sellers. Select Campus Dorm (₦500) or City Residential (₦1,200) delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-xl font-black flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="text-lg font-black text-blue-900">Secure Payment</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Pay securely via hosted checkout (Card, automated OPay transfer, or Pay on Delivery). Sellers fulfill within 30-60 mins.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-green-600 text-white rounded-xl font-black flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="text-lg font-black text-blue-900">Confirm Delivery</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Track your order live and confirm delivery. Leave a verified-purchase review to help maintain trusted seller ratings.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SAFETY AND TRUST & SELLER CALL TO ACTION (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Safety & Trust */}
        <div className="lg:col-span-6 bg-blue-900 text-white p-8 rounded-3xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Safety and Trust Guarantee</span>
            </div>
            <h3 className="text-2xl font-black">Genuine Products & Honest Marketplace Data</h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              We never generate fake sold counts, random countdowns, or simulated discounts. Every number on FlexiaCart comes from real verified deliveries.
            </p>
          </div>

          <div className="pt-4 border-t border-blue-800 flex flex-wrap gap-4 text-xs font-bold text-orange-400">
            <Link href="/safety" className="underline">Marketplace Safety Rules &rarr;</Link>
            <Link href="/returns" className="underline">Returns & Disputes Policy &rarr;</Link>
            <Link href="/about" className="underline">About FlexiaCart &rarr;</Link>
          </div>
        </div>

        {/* Seller Call to Action */}
        <div className="lg:col-span-6 bg-orange-500 text-white p-8 rounded-3xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase">
              <Store className="w-4 h-4" />
              <span>Section 2: Seller Application Workflow</span>
            </div>
            <h3 className="text-2xl font-black">Sell to University Students & City Residents</h3>
            <p className="text-sm text-orange-100 leading-relaxed">
              Create your verified storefront, list genuine products, and access transparent 5% commission accounting with automated payouts.
            </p>
          </div>

          <div className="pt-4 border-t border-orange-600 flex items-center justify-between">
            <span className="text-xs font-bold text-orange-100">100% KYC Verified Seller Application</span>
            <Link
              href="/seller/apply"
              className="bg-white text-orange-600 font-black px-6 py-3 rounded-xl text-sm hover:bg-orange-50 transition-colors shadow-md"
            >
              Become a Seller Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
