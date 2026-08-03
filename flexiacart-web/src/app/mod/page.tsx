"use client";

import React, { useState } from 'react';
import { UserCheck, CheckCircle2, XCircle, ShieldAlert, Video, MessageSquare } from 'lucide-react';

export default function ModeratorPortalPage() {
  const [approvedList, setApprovedList] = useState<string[]>([]);
  const [rejectedList, setRejectedList] = useState<string[]>([]);

  const pendingItems = [
    { id: 'm1', seller: 'Campus Grocers Hub', title: 'Kelloggs Cornflakes 500g', price: '₦4,200', type: 'Product Listing' },
    { id: 'm2', seller: 'Ikeja Gadget House', title: 'JBL Charge 5 Bluetooth Speaker', price: '₦68,000', type: 'Product Listing' },
    { id: 'm3', seller: 'Verified Student Buyer', title: 'Video: "How I Cook Indomie in Dorm"', price: 'Video Review', type: 'FlexiFeed Video' },
  ];

  const handleApprove = (id: string) => {
    setApprovedList([...approvedList, id]);
  };

  const handleReject = (id: string) => {
    setRejectedList([...rejectedList, id]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-gray-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex items-center justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
            <UserCheck className="w-4 h-4" />
            <span>Moderator Portal — Content & Dispute Desk</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">Moderation & KYC Verification Queue</h1>
          <p className="text-sm text-blue-200">
            Review pending seller products, verify shoppable video reviews (FlexiFeed), and resolve customer disputes
          </p>
        </div>
      </div>

      {/* Moderation Queue */}
      <div className="bg-white rounded-3xl border border-gray-200 p-6 space-y-6 shadow-sm">
        <h2 className="text-xl font-black text-blue-900 border-b border-gray-100 pb-4">
          Pending Approvals Queue ({pendingItems.length - approvedList.length - rejectedList.length} items remaining)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pendingItems.map((item) => {
            if (approvedList.includes(item.id) || rejectedList.includes(item.id)) return null;
            return (
              <div key={item.id} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-xs font-black text-orange-500 uppercase">{item.type}</span>
                  <span className="text-xs text-gray-400">ID: {item.id}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <div className="text-xs text-gray-500">Submitted by: {item.seller}</div>
                  <div className="text-sm font-black text-blue-900 mt-1">{item.price}</div>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Approve Live</span>
                  </button>
                  <button
                    onClick={() => handleReject(item.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
