"use client";

import React, { useState } from 'react';
import { MOCK_NOTIFICATIONS, AppNotification } from '@/data/marketplace';
import { Bell, Check, ArrowRight, ShieldCheck, DollarSign, Package, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function NotificationsPage() {
  const [list, setList] = useState<AppNotification[]>(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setList(list.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-6 h-6 text-orange-500" />
          <h1 className="text-2xl font-black text-blue-900">Your Notifications</h1>
        </div>
        <button
          onClick={markAllRead}
          className="text-xs font-bold text-gray-600 hover:text-orange-500 flex items-center gap-1"
        >
          <Check className="w-4 h-4" />
          <span>Mark All as Read</span>
        </button>
      </div>

      <div className="space-y-3">
        {list.map((n) => (
          <div
            key={n.id}
            className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
              n.read
                ? 'bg-white border-gray-200 text-gray-600'
                : 'bg-orange-50/50 border-orange-200 text-gray-900 font-bold shadow-sm'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-black text-orange-600">{n.type}</span>
                <span className="text-[11px] text-gray-400">● {n.timestamp}</span>
              </div>
              <h3 className="text-sm font-black">{n.title}</h3>
              <p className="text-xs text-gray-600 font-medium">{n.message}</p>
            </div>

            {n.link && (
              <Link
                href={n.link}
                className="bg-blue-900 text-white p-2 rounded-xl hover:bg-blue-950 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
