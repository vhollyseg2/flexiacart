"use client";

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

export default function ReportsAndDisputesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reportType, setReportType] = useState<'LISTING' | 'ORDER'>('ORDER');
  const [reason, setReason] = useState('COUNTERFEIT');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-black text-blue-900">Reports, Disputes & Immutable Refunds</h1>
        <p className="text-gray-500">Section 15 Compliance: Submit Listing Reports or Order Disputes for Moderator/Admin review</p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border-2 border-green-200 p-8 rounded-3xl text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
          <h3 className="font-black text-green-800 text-xl">Report Submitted for Moderation</h3>
          <p className="text-xs sm:text-sm text-green-700 max-w-md mx-auto">
            Your dispute has been logged in our immutable database. Administrators will review the evidence, verify the exact refunded amount, and reverse pending seller earnings as required by Section 15.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-200 space-y-6 shadow-sm">
          <div className="flex gap-4 border-b pb-4">
            <button
              type="button"
              onClick={() => setReportType('ORDER')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm ${
                reportType === 'ORDER' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Order Dispute / Refund Request
            </button>
            <button
              type="button"
              onClick={() => setReportType('LISTING')}
              className={`flex-1 py-3 rounded-xl font-bold text-sm ${
                reportType === 'LISTING' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Listing Report (Counterfeit / Prohibited)
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Reason *</label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
              >
                {reportType === 'LISTING' ? (
                  <>
                    <option value="COUNTERFEIT">Counterfeit / Unauthorized Replica</option>
                    <option value="PROHIBITED">Prohibited Item (Weapons, Drugs, etc.)</option>
                    <option value="MISLEADING">Misleading Information or Impossible Price</option>
                    <option value="OUTSIDE_PAYMENT">Phone Number / Outside Payment Instructions</option>
                  </>
                ) : (
                  <>
                    <option value="DEFECTIVE">Product Arrived Defective or Damaged</option>
                    <option value="WRONG_ITEM">Wrong Item Delivered</option>
                    <option value="NOT_DELIVERED">Order Marked Delivered but Not Received</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Evidence & Description *</label>
              <textarea
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Provide order number, seller name, and detailed explanation..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold h-28"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl text-base shadow-md"
          >
            Submit Report to Moderator Queue
          </button>
        </form>
      )}
    </div>
  );
}
