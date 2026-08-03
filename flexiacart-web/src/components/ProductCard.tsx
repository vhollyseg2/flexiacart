"use client";

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Star, Zap } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group">
      {/* Image & Badges */}
      <div className="relative h-48 sm:h-56 bg-gray-50 overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white font-black text-[10px] uppercase px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
        {product.isExpress30Min && (
          <span className="absolute bottom-3 right-3 bg-blue-900/90 text-white font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
            <Zap className="w-3 h-3 text-orange-400" />
            <span>30-Min</span>
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-500">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-gray-700">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviewsCount})</span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-orange-500 transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>

        {/* Pricing & Add Button */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <div className="text-lg sm:text-xl font-black text-blue-900">
              ₦{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                ₦{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>

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
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
