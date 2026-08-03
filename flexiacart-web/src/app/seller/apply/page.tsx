"use client";

import React, { useState } from 'react';
import { Store, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BecomeASellerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('CAMPUS_AND_CITY');
  const [returnTerms, setReturnTerms] = useState('');
  const [pickupInfo, setPickupInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto border-4 border-green-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="bg-orange-500/10 text-orange-600 font-bold text-xs px-3 py-1 rounded-full">
            ● Status: Awaiting Approval (Section 2 Compliance)
          </span>
          <h1 className="text-3xl font-black text-blue-900">Application Submitted for Review!</h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            Your application for <strong>{storeName}</strong> is now under review by FlexiaCart Administrators and Moderators. You will be notified via email and SMS once approved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-bold px-8 py-3.5 rounded-xl text-sm"
        >
          Return to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-black text-blue-900">Become a Verified Seller</h1>
        <p className="text-sm text-gray-500">
          Create your multi-vendor storefront, list genuine products, and reach buyers across Campus Dorms & the City
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-200 space-y-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Unique Store Name *
            </label>
            <input
              type="text"
              required
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="e.g. Queen Amina Grocers Hub"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Store Description *
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell buyers about your store and products..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold h-24"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Seller Location *
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              >
                <option value="CAMPUS_AND_CITY">Campus Dorm & City Residence</option>
                <option value="CAMPUS_ONLY">Campus Dorm Zone Only</option>
                <option value="CITY_ONLY">City Residential Zone Only</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Primary Product Category *
              </label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold">
                <option>Phones & Laptops</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Designer Perfumes</option>
                <option>Unisex Clothes</option>
                <option>Footwear & Sneakers</option>
                <option>Phone Accessories</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Return Terms & Policy *
            </label>
            <input
              type="text"
              required
              value={returnTerms}
              onChange={(e) => setReturnTerms(e.target.value)}
              placeholder="e.g. 7-day replacement for defective items in original packaging"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Safe Pickup Information *
            </label>
            <input
              type="text"
              required
              value={pickupInfo}
              onChange={(e) => setPickupInfo(e.target.value)}
              placeholder="e.g. Pickup available at Ikeja Hub between 9 AM and 6 PM"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            By applying, you agree to FlexiaCart's Genuine Products & Anti-Scam Rules.
          </span>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl text-sm transition-all shadow-md"
          >
            Submit Application for Review
          </button>
        </div>
      </form>
    </div>
  );
}
