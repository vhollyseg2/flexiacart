import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-black text-blue-900">About FlexiaCart.com</h1>
        <p className="text-gray-500">Nigeria's Trusted Online Marketplace for University Students and City Residents</p>
      </div>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          FlexiaCart was founded to solve a major problem: buyers need authentic products, honest marketplace data, and reliable delivery across both university campuses and surrounding city neighborhoods.
        </p>

        <h2 className="text-xl font-black text-blue-900">Our 9 Core Marketplace Principles</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold">
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>100% Genuine Products Only</span>
          </li>
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>Honest Marketplace Data (No Fake Sales)</span>
          </li>
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>Simple Mobile-First Shopping</span>
          </li>
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>Clear Seller Accountability & verification</span>
          </li>
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>Secure Hosted Online Payments</span>
          </li>
          <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border">
            <CheckCircle2 className="w-5 h-5 text-orange-500" />
            <span>Transparent Geofenced Delivery Fees</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
