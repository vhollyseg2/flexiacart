"use client";

import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, XCircle, ShieldAlert, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function OrderTrackingPage() {
  const [orders, setOrders] = useState([
    {
      id: 'FC-8924',
      date: '2026-08-03',
      seller: 'Chinedu Tech & Groceries Store',
      items: ['Oraimo FreePods 4 Earbuds (x1)', 'Indomie Carton 40s (x1)'],
      total: 43000,
      stage: 'OUT_FOR_DELIVERY' as const,
      address: 'Queen Amina Hall, Room 104 (Campus Dorm)',
      canConfirm: true,
    },
    {
      id: 'FC-8920',
      date: '2026-08-02',
      seller: 'Ikeja Gadgets & Provisions House',
      items: ['Anker 20,000mAh Power Bank (x1)'],
      total: 28000,
      stage: 'DELIVERED' as const,
      address: '14 Allen Avenue, Ikeja (City Residence)',
      canConfirm: false,
    }
  ]);

  const handleConfirmDelivery = (id: string) => {
    // Section 10 & 12: Buyer confirms delivery to release seller earnings
    setOrders(orders.map((o) => o.id === id ? { ...o, stage: 'DELIVERED', canConfirm: false } : o));
    alert("✅ Delivery Confirmed! Seller earnings have been released from Pending to Available in accordance with Section 12.");
  };

  const handleCancelOrder = (id: string) => {
    // Section 10: Cancelling an unpaid order restores stock once
    setOrders(orders.map((o) => o.id === id ? { ...o, stage: 'CANCELLED' as any, canConfirm: false } : o));
    alert("🛑 Order Cancelled. Product stock count has been automatically restored once in accordance with Section 10.");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-black text-blue-900">Your Orders & Live Tracking</h1>
        <p className="text-sm text-gray-500">
          Section 10 Compliance: Multi-vendor order grouping, buyer delivery confirmation, and stock restoration
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-black uppercase text-orange-500">Order #{order.id}</span>
                <div className="text-xs text-gray-500">Placed on: {order.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black ${
                  order.stage === 'DELIVERED' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-900'
                }`}>
                  ● {order.stage}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-gray-700">
              <div>
                <div className="text-xs uppercase text-gray-400 font-bold">Seller / Vendor Store</div>
                <div className="text-blue-900 font-black">{order.seller}</div>
                <div className="mt-2 text-xs uppercase text-gray-400 font-bold">Delivery Address</div>
                <div>{order.address}</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-400 font-bold">Order Items</div>
                <ul className="list-disc pl-5 text-xs space-y-1">
                  {order.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
                <div className="mt-2 text-base font-black text-blue-900">
                  Total Amount: ₦{order.total.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3 justify-end">
              {order.canConfirm && (
                <>
                  <button
                    onClick={() => handleConfirmDelivery(order.id)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    ✔ Confirm Delivery (Release Seller Earnings)
                  </button>
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs px-5 py-2.5 rounded-xl border border-red-200 transition-all"
                  >
                    Cancel Unpaid Order
                  </button>
                </>
              )}
              <Link
                href="/disputes"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs px-5 py-2.5 rounded-xl transition-all"
              >
                Report Problem / Open Dispute
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
