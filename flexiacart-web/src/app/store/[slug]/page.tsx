"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { SELLERS } from '@/data/marketplace';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ShieldCheck, MapPin, Star, Package, Calendar, RotateCcw, CheckCircle2, Award, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function PublicSellerStorePage() {
  const params = useParams();
  const slug = params.slug as string;
  const seller = SELLERS.find((s) => s.slug === slug) || SELLERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Store Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        <div className="h-48 sm:h-64 w-full bg-blue-900 relative">
          <img src={seller.bannerUrl} alt={seller.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        {/* Profile Info Overlay */}
        <div className="bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <img
              src={seller.logoUrl}
              alt={seller.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-lg -mt-16 sm:-mt-20 relative z-10 bg-white"
            />
            <div className="text-center sm:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-blue-900">{seller.name}</h1>
                <span className="bg-green-100 text-green-700 font-black text-xs px-3 py-1 rounded-full flex items-center gap-1 border border-green-200">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>{seller.verificationLevel.replace('_', ' ')}</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">{seller.description}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-500 font-bold pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span>{seller.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-900" />
                  <span>Member Since: {seller.memberSince}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto justify-end">
            <Link
              href="/messages"
              className="flex-1 md:flex-initial bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Seller</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Genuine Stats Bar (Honest Marketplace Data) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center">
          <div className="text-xs font-bold text-gray-500 uppercase">Delivered Sales</div>
          <div className="text-2xl font-black text-blue-900 mt-1">{seller.deliveredSalesCount.toLocaleString()}</div>
          <div className="text-[10px] text-green-600 font-bold">100% Genuine Completed Orders</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center">
          <div className="text-xs font-bold text-gray-500 uppercase">Verified Rating</div>
          <div className="text-2xl font-black text-orange-500 mt-1 flex items-center justify-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>{seller.rating}</span>
          </div>
          <div className="text-[10px] text-gray-500 font-bold">{seller.verifiedReviewsCount} verified reviews</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center">
          <div className="text-xs font-bold text-gray-500 uppercase">Approved Products</div>
          <div className="text-2xl font-black text-blue-900 mt-1">{seller.approvedProductsCount}</div>
          <div className="text-[10px] text-gray-500 font-bold">Reviewed by Moderators</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-center">
          <div className="text-xs font-bold text-gray-500 uppercase">Return Policy</div>
          <div className="text-sm font-black text-gray-800 mt-1 line-clamp-1">{seller.returnPolicy}</div>
          <div className="text-[10px] text-orange-500 font-bold">Safe Pickup Available</div>
        </div>
      </div>

      {/* Seller's Approved Products Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-blue-900 border-b border-gray-100 pb-4">
          Approved Listings from {seller.name}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
