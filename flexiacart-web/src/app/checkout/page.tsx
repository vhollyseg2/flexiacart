"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { MapPin, ShieldCheck, CreditCard, Smartphone, CheckCircle2, Package, ArrowLeft, Truck, Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const {
    items,
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    deliveryType,
    setDeliveryType,
    promoCode,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'TRANSFER' | 'CARD' | 'COD'>('TRANSFER');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("8123456789");
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 3000);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto border-4 border-green-500/20 shadow-lg animate-bounce">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase text-orange-500 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Order Successfully Placed
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-blue-900">
            Order #FC-8924 Confirmed! 🎉
          </h1>
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you for shopping at <strong>FlexiaCart.com</strong>! Your order has been received and is being packed. Our dispatch rider will contact you on <strong>{phone || 'your phone number'}</strong> shortly.
          </p>
        </div>

        {/* Tracking Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 text-left space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <span className="text-xs font-bold uppercase text-gray-500">Estimated Delivery Time</span>
            <span className="text-sm font-black text-orange-500">
              {deliveryType === 'CAMPUS' ? '30–45 Mins (Campus Dorm)' : '45–60 Mins (City Residence)'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
              <Truck className="w-5 h-5 text-blue-900" />
              <span>Dispatch Status: <strong>Order Assigned to Rider #4</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
              <MapPin className="w-5 h-5 text-blue-900" />
              <span>Delivery Address: <strong>{address || 'Selected Location'}</strong></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            onClick={clearCart}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md"
          >
            Return to Marketplace
          </Link>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            💬 Track via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <Package className="w-16 h-16 text-gray-300 mx-auto" />
        <h1 className="text-2xl font-black text-blue-900">Your Cart is Empty</h1>
        <p className="text-gray-500">Please add products or smart bundles before proceeding to checkout.</p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl"
        >
          Browse Storefront
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Storefront</span>
      </Link>

      <div className="border-b border-gray-100 pb-4">
        <h1 className="text-3xl font-black text-blue-900">Secure Checkout</h1>
        <p className="text-sm text-gray-500">
          Complete your order for fast delivery across campus or town
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Col: Customer & Payment Form */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Delivery Location Toggle */}
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="font-black text-blue-900 text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>1. Select Delivery Destination</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDeliveryType('CAMPUS')}
                className={`py-3 px-4 rounded-2xl text-sm font-bold border text-left transition-all ${
                  deliveryType === 'CAMPUS'
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>Campus Dorm Delivery</div>
                <div className="text-xs opacity-90 mt-0.5">Delivery Fee: ₦500 (30–45 Mins)</div>
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType('CITY')}
                className={`py-3 px-4 rounded-2xl text-sm font-bold border text-left transition-all ${
                  deliveryType === 'CITY'
                    ? 'bg-blue-900 text-white border-blue-900 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>City Residential Delivery</div>
                <div className="text-xs opacity-90 mt-0.5">Delivery Fee: ₦1,200 (45–60 Mins)</div>
              </button>
            </div>
          </div>

          {/* 2. Customer Details Form */}
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="bg-white p-6 rounded-3xl border border-gray-200 space-y-6 shadow-sm">
            <h3 className="font-black text-blue-900 text-lg">2. Delivery Address & Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Chinedu Okafor"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Phone Number (WhatsApp Active)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0812 345 6789"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                  {deliveryType === 'CAMPUS' ? 'Hostel Name & Room Number' : 'Street Address & Nearest Landmark'}
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={
                    deliveryType === 'CAMPUS'
                      ? 'e.g. Queen Amina Hall, Room 104'
                      : 'e.g. 14 Allen Avenue, Ikeja (Near GTBank)'
                  }
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* 3. Payment Method Switcher */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="font-black text-blue-900 text-lg">3. Select Nigerian Payment Method</h3>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('TRANSFER')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'TRANSFER'
                      ? 'bg-orange-500/10 border-orange-500 text-orange-600'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <Smartphone className="w-5 h-5 mx-auto mb-1 text-orange-500" />
                  <span>OPay / PalmPay Transfer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CARD')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'CARD'
                      ? 'bg-orange-500/10 border-orange-500 text-orange-600'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-900" />
                  <span>Paystack / Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all ${
                    paymentMethod === 'COD'
                      ? 'bg-orange-500/10 border-orange-500 text-orange-600'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                  }`}
                >
                  <Truck className="w-5 h-5 mx-auto mb-1 text-green-600" />
                  <span>Pay on Delivery</span>
                </button>
              </div>

              {/* Transfer Details Card */}
              {paymentMethod === 'TRANSFER' && (
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl space-y-2 text-xs">
                  <div className="font-black text-blue-900">Instant OPay / PalmPay Automated Transfer:</div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-blue-200">
                    <div>
                      <div className="text-gray-500">OPay Account Number:</div>
                      <div className="text-base font-black text-gray-800">8123456789 (FlexiaCart Store)</div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
                    >
                      {copiedAccount ? <Check className="w-3.5 h-3.5 text-orange-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAccount ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-600">
                    Your order will be confirmed automatically within 10 seconds after transfer.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Right Col: Order Summary Card */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 space-y-6 sticky top-24 shadow-sm">
            <h3 className="font-black text-blue-900 text-lg border-b border-gray-200 pb-3">
              Order Summary ({items.length} items)
            </h3>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm items-center">
                  <div className="flex-1 min-w-0 pr-4">
                    <span className="font-bold text-gray-800 line-clamp-1">{item.title}</span>
                    <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-bold text-gray-900">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-200 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Promo Discount ({promoCode})</span>
                  <span>-₦{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee ({deliveryType === 'CAMPUS' ? 'Campus Dorm' : 'City Residential'})</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xl font-black text-blue-900 pt-3 border-t border-gray-200">
                <span>Total Payable</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-base shadow-lg transition-all"
            >
              Place Order Now — ₦{total.toLocaleString()}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>256-Bit SSL Secured Nigerian Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
