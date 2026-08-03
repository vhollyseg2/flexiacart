"use client";

import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Users, Store, DollarSign, MapPin, Settings } from 'lucide-react';

export default function SuperAdminPage() {
  const [campusFee, setCampusFee] = useState('500');
  const [cityFee, setCityFee] = useState('1200');
  const [savedMsg, setSavedMsg] = useState(false);

  const handleSaveFees = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-950 to-orange-600 text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Super Admin Executive Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">FlexiaCart.com HQ Dashboard</h1>
          <p className="text-sm text-blue-200">
            Platform Analytics, Multi-Vendor Management, and Geofenced Delivery Fee Configurator
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-2">
          <div className="text-xs text-gray-500 uppercase font-bold">Gross Merchandise Value (GMV)</div>
          <div className="text-3xl font-black text-blue-900">₦4,850,000</div>
          <div className="text-xs text-green-600 font-bold">↑ 24.5% from last month</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-2">
          <div className="text-xs text-gray-500 uppercase font-bold">Registered Shoppers</div>
          <div className="text-3xl font-black text-blue-900">14,280</div>
          <div className="text-xs text-gray-600">8,500 Dorm Students / 5,780 City Residents</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-2">
          <div className="text-xs text-gray-500 uppercase font-bold">Active Sellers / Vendors</div>
          <div className="text-3xl font-black text-blue-900">142</div>
          <div className="text-xs text-green-600 font-bold">100% KYC Verified</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-2">
          <div className="text-xs text-gray-500 uppercase font-bold">Active Dispatch Riders</div>
          <div className="text-3xl font-black text-blue-900">45</div>
          <div className="text-xs text-orange-500 font-bold">12 Campus Express / 33 City Zone</div>
        </div>
      </div>

      {/* Geofence Delivery Fee Configurator */}
      <div className="bg-gray-50 rounded-3xl border border-gray-200 p-8 space-y-6">
        <h2 className="text-xl font-black text-blue-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-500" />
          <span>Geofenced Delivery Fee Configurator (Live Site Config)</span>
        </h2>
        <form onSubmit={handleSaveFees} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
              Campus Dorm Delivery Fee (₦)
            </label>
            <input
              type="number"
              value={campusFee}
              onChange={(e) => setCampusFee(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
              City Residential Delivery Fee (₦)
            </label>
            <input
              type="number"
              value={cityFee}
              onChange={(e) => setCityFee(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md"
            >
              Save Fee Changes Live
            </button>
          </div>
        </form>
        {savedMsg && (
          <div className="text-xs font-bold text-green-600">
            ✅ Geofence delivery fees updated successfully across FlexiaCart.com!
          </div>
        )}
      </div>
    </div>
  );
}
