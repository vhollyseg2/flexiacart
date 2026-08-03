"use client";

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Zap, Clock, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ExpressPage() {
  const expressProducts = PRODUCTS.filter((p) => p.isExpress30Min);

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

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-orange-600 text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
            <Zap className="w-4 h-4" />
            <span>Guaranteed Emergency Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">
            FlexiExpress — 30-Minute Guaranteed Hub
          </h1>
          <p className="text-sm text-blue-100 leading-relaxed">
            Urgent exam night? Run out of cooking oil or phone charger at midnight? Order from this hub for guaranteed dispatch within 10 mins and arrival in 30 mins.
          </p>
        </div>

        {/* Live Timer Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center space-y-2 w-full md:w-auto">
          <Clock className="w-8 h-8 text-orange-400 mx-auto" />
          <div className="text-3xl font-black text-white">28 : 45</div>
          <p className="text-xs text-blue-200 font-bold uppercase">Average City & Campus Delivery ETA</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-black text-blue-900">Available Now for 30-Min Express</h2>
          <span className="text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
            ● 8 Express Riders Active in Your Zone
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {expressProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
