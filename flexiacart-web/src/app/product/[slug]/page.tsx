"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingCart, Zap, CheckCircle2, ShieldCheck, ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem, deliveryType, setDeliveryType } = useCart();

  const slug = params.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-black text-blue-900">Product Not Found</h1>
        <p className="text-gray-500">The product you are looking for does not exist or has been removed.</p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl"
        >
          Return to Storefront
        </Link>
      </div>
    );
  }

  const deliveryFee = deliveryType === 'CAMPUS' ? 500 : 1200;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Back Link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Marketplace</span>
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="lg:col-span-6 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 p-4 sm:p-8 flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-[420px] object-contain rounded-2xl"
          />
          {product.badge && (
            <span className="absolute top-6 left-6 bg-orange-500 text-white font-black text-xs uppercase px-3 py-1.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Details & Purchase Bar */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase text-orange-500 bg-orange-50 px-3 py-1 rounded-md border border-orange-200">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-gray-700">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount} verified customer reviews)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-blue-900 tracking-tight leading-tight">
              {product.title}
            </h1>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-3xl sm:text-4xl font-black text-blue-900">
                ₦{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-gray-400 line-through font-semibold">
                  ₦{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Feature Bullet Checklist */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Features</h4>
              <ul className="space-y-1.5 text-sm font-medium text-gray-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Estimator Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-900">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Delivery Estimate Calculator</span>
                </div>
                <span className="text-xs font-bold text-gray-600">
                  Fee: ₦{deliveryFee.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={() => setDeliveryType('CAMPUS')}
                  className={`py-2 px-3 rounded-xl border transition-all ${
                    deliveryType === 'CAMPUS'
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Campus Dorm (30–45 Mins)
                </button>
                <button
                  onClick={() => setDeliveryType('CITY')}
                  className={`py-2 px-3 rounded-xl border transition-all ${
                    deliveryType === 'CITY'
                      ? 'bg-blue-900 text-white border-blue-900 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  City Address (45–60 Mins)
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  originalPrice: product.originalPrice,
                  image: product.image,
                })
              }
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart — ₦{product.price.toLocaleString()}</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>100% Verified Quality</span>
            </span>
            <span>Use code <strong>FLEXIA10</strong> for 10% OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
