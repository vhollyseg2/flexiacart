"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    deliveryType,
    setDeliveryType,
    promoCode,
    applyPromoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ success: boolean; text: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ success: res.success, text: res.message });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-50">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-blue-900 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-400" />
            <h2 className="text-lg font-black">Your Shopping Cart</h2>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base">Your Cart is Empty</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Add groceries, tech gadgets, or dorm provisions to get started!
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover bg-white"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm line-clamp-1">{item.title}</h4>
                  <div className="text-sm font-black text-blue-900 mt-1">
                    ₦{item.price.toLocaleString()}
                  </div>
                  {item.isBundle && (
                    <span className="inline-block bg-orange-500/10 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                      Smart Bundle
                    </span>
                  )}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-bold text-sm text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 space-y-4">
            {/* Delivery Switcher */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                Delivery Location Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDeliveryType('CAMPUS')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    deliveryType === 'CAMPUS'
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Campus Dorm (₦500)
                </button>
                <button
                  onClick={() => setDeliveryType('CITY')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    deliveryType === 'CITY'
                      ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  City Residential (₦1,200)
                </button>
              </div>
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Enter code (e.g. FLEXIA10)"
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase font-bold"
                />
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </div>
              {promoMessage && (
                <div
                  className={`text-xs flex items-center gap-1.5 font-semibold ${
                    promoMessage.success ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {promoMessage.success ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  <span>{promoMessage.text}</span>
                </div>
              )}
            </form>

            {/* Breakdown */}
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Promo Discount ({promoCode})</span>
                  <span>-₦{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee ({deliveryType === 'CAMPUS' ? 'Dorm' : 'City'})</span>
                <span className="font-semibold">₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg font-black text-blue-900 pt-2 border-t border-gray-200">
                <span>Total Amount</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="px-3 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-bold text-xs"
              >
                Clear
              </button>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
