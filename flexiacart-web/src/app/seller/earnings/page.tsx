"use client";

import React from 'react';
import { MOCK_EARNINGS } from '@/data/marketplace';
import { DollarSign, ShieldAlert, ArrowLeft, TrendingUp, RefreshCw, FileText } from 'lucide-react';
import Link from 'next/link';

export default function SellerEarningsPage() {
  const e = MOCK_EARNINGS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Link
        href="/seller"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Seller Dashboard</span>
      </Link>

      <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-blue-900">Seller Earnings & Commission Accounting</h1>
          <p className="text-sm text-gray-500">
            Transparent 5% platform commission ledger with immutable refund reference tracking
          </p>
        </div>
        <span className="bg-orange-500/10 text-orange-600 font-bold text-xs px-3 py-1.5 rounded-full border border-orange-500/30">
          ● Configurable Commission: 5.0%
        </span>
      </div>

      {/* Financial Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase text-gray-500">Available Earnings</div>
          <div className="text-3xl font-black text-green-600">₦{e.availableEarnings.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Delivered & verified orders</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase text-gray-500">Pending Earnings</div>
          <div className="text-3xl font-black text-orange-500">₦{e.pendingEarnings.toLocaleString()}</div>
          <div className="text-xs text-gray-500">In-transit order escrow</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase text-gray-500">Platform Commission (5%)</div>
          <div className="text-3xl font-black text-blue-900">₦{e.platformCommissionAmount.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Deducted from gross ₦{e.grossSales.toLocaleString()}</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase text-gray-500">Refund Deductions / Debt</div>
          <div className="text-3xl font-black text-gray-800">₦{e.refundDeductions.toLocaleString()}</div>
          <div className="text-xs text-green-600 font-bold">0.0% dispute rate</div>
        </div>
      </div>

      {/* Transaction Ledger Table */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 space-y-4 shadow-sm overflow-x-auto">
        <h3 className="font-black text-blue-900 text-lg">Immutable Transaction Ledger</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
              <th className="py-3">Order Ref</th>
              <th className="py-3">Date</th>
              <th className="py-3">Gross Amount</th>
              <th className="py-3">Commission (5%)</th>
              <th className="py-3">Net Earnings</th>
              <th className="py-3">Status</th>
              <th className="py-3">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm font-bold">
            {e.ledger.map((row) => (
              <tr key={row.id}>
                <td className="py-3 text-blue-900">{row.orderNumber}</td>
                <td className="py-3 text-gray-500">{row.date}</td>
                <td className="py-3">₦{row.amount.toLocaleString()}</td>
                <td className="py-3 text-red-500">-₦{row.commission.toLocaleString()}</td>
                <td className="py-3 font-black text-green-600">₦{row.net.toLocaleString()}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    row.status === 'AVAILABLE' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 text-xs text-gray-500">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
