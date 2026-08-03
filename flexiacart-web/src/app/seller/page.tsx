"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Store, DollarSign, Package, TrendingUp, Plus, CheckCircle2, AlertCircle, Smartphone, Truck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export default function SellerPortalPage() {
  const { user, updateWallet } = useAuth();
  const [activeTab, setActiveTab] = useState<'PRODUCTS' | 'ORDERS' | 'WALLET'>('PRODUCTS');
  const [withdrawing, setWithdrawing] = useState(false);
  const [withdrawMsg, setWithdrawMsg] = useState('');

  const [productsList, setProductsList] = useState(PRODUCTS.slice(0, 4));
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleWithdraw = () => {
    setWithdrawing(true);
    setTimeout(() => {
      updateWallet(-10000);
      setWithdrawMsg("✅ ₦10,000 sent to OPay Account 8123456789 successfully!");
      setWithdrawing(false);
    }, 1200);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newPrice) return;
    const item = {
      id: 'p_' + Date.now(),
      slug: newTitle.toLowerCase().replace(/\s+/g, '-'),
      title: newTitle,
      category: 'Provisions' as const,
      price: Number(newPrice),
      rating: 5.0,
      reviewsCount: 1,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80',
      isExpress30Min: true,
      inStock: true,
      description: 'New product listed by verified campus & city vendor.',
      features: ['Verified Stock', 'Fast Campus & City Delivery'],
      deliveredSalesCount: 0,
      locationZone: 'CAMPUS_AND_CITY' as const,
    };
    setProductsList([item, ...productsList]);
    setNewTitle('');
    setNewPrice('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-gray-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase">
            <Store className="w-4 h-4" />
            <span>Seller / Vendor Portal (Section 12 Compliance)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black">{user.storeName}</h1>
          <p className="text-sm text-blue-200">
            Verified Multi-Vendor Dashboard — Manage Campus Dorm & City Residential Orders
          </p>
        </div>

        {/* Revenue KPI Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-right space-y-2 min-w-[240px]">
          <div className="text-xs text-blue-200 uppercase font-bold">Total Vendor Earnings</div>
          <div className="text-3xl font-black text-white">₦845,000</div>
          <button
            onClick={handleWithdraw}
            disabled={withdrawing}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md w-full mt-2"
          >
            {withdrawing ? 'Processing...' : 'Withdraw to OPay / Bank'}
          </button>
          {withdrawMsg && <div className="text-xs text-green-400 font-bold mt-1">{withdrawMsg}</div>}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 gap-4">
        <button
          onClick={() => setActiveTab('PRODUCTS')}
          className={`py-3 px-6 font-bold text-sm border-b-2 transition-all ${
            activeTab === 'PRODUCTS'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          📦 Active Inventory ({productsList.length})
        </button>
        <button
          onClick={() => setActiveTab('ORDERS')}
          className={`py-3 px-6 font-bold text-sm border-b-2 transition-all ${
            activeTab === 'ORDERS'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          🚚 Incoming Orders (3 PENDING)
        </button>
      </div>

      {activeTab === 'PRODUCTS' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Add Product Form */}
          <div className="lg:col-span-4 bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="font-black text-blue-900 text-lg">List New Product</h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Milo Refill Pack 500g"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Price (₦ Naira)</label>
                <input
                  type="number"
                  required
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="e.g. 4500"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-sm"
              >
                + Publish to FlexiaCart.com
              </button>
            </form>
          </div>

          {/* Product Table */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-200 p-6 space-y-4 shadow-sm overflow-x-auto">
            <h3 className="font-black text-blue-900 text-lg">Your Live Store Products</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-xs uppercase text-gray-400 font-bold">
                  <th className="py-3">Product</th>
                  <th className="py-3">Category</th>
                  <th className="py-3">Price</th>
                  <th className="py-3">30-Min Express</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm font-bold">
                {productsList.map((p) => (
                  <tr key={p.id}>
                    <td className="py-3 flex items-center gap-3">
                      <img src={p.image} className="w-10 h-10 rounded-lg object-cover" />
                      <span>{p.title}</span>
                    </td>
                    <td className="py-3 text-orange-500">{p.category}</td>
                    <td className="py-3">₦{p.price.toLocaleString()}</td>
                    <td className="py-3">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Active</span>
                    </td>
                    <td className="py-3">
                      <span className="text-green-600">● LIVE</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'ORDERS' && (
        <div className="space-y-4">
          <h3 className="font-black text-blue-900 text-xl">Order Fulfillment Queue</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-black text-sm text-blue-900">Order #FC-9012</span>
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded font-bold">NEW</span>
              </div>
              <div className="space-y-1 text-xs">
                <div><strong>Customer:</strong> Ngozi Eze</div>
                <div><strong>Location:</strong> Queen Amina Hall (Campus Dorm)</div>
                <div><strong>Items:</strong> Indomie Carton (x1), Titus Sardine (x2)</div>
                <div className="font-black text-sm text-blue-900 pt-2">Total: ₦35,300</div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
                Accept & Assign Rider
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-black text-sm text-blue-900">Order #FC-9011</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-bold">PACKING</span>
              </div>
              <div className="space-y-1 text-xs">
                <div><strong>Customer:</strong> Tunde Balogun</div>
                <div><strong>Location:</strong> 12 Ikeja Way (City Residential)</div>
                <div><strong>Items:</strong> Oraimo FreePods 4, 65W GaN Charger</div>
                <div className="font-black text-sm text-blue-900 pt-2">Total: ₦39,000</div>
              </div>
              <button className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 rounded-xl text-xs transition-colors">
                Mark Ready for Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
