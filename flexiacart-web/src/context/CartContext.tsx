"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Bundle } from '@/data/products';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  isBundle?: boolean;
}

export type DeliveryType = 'CAMPUS' | 'CITY';

interface CartContextType {
  items: CartItem[];
  deliveryType: DeliveryType;
  setDeliveryType: (type: DeliveryType) => void;
  promoCode: string;
  promoDiscountPercent: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  subtotal: number;
  discountAmount: number;
  deliveryFee: number;
  total: number;
  addItem: (item: { id: string; title: string; price: number; originalPrice?: number; image: string; isBundle?: boolean }, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('CAMPUS');
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoDiscountPercent, setPromoDiscountPercent] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Load from localStorage on client side
  useEffect(() => {
    try {
      const saved = localStorage.getItem('flexiacart_items');
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedDelivery = localStorage.getItem('flexiacart_delivery_type');
      if (savedDelivery === 'CAMPUS' || savedDelivery === 'CITY') {
        setDeliveryType(savedDelivery);
      }
    } catch (e) {
      // Ignore localStorage error on SSR
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('flexiacart_items', JSON.stringify(items));
      localStorage.setItem('flexiacart_delivery_type', deliveryType);
    } catch (e) {
      // Ignore
    }
  }, [items, deliveryType]);

  const addItem = (newItem: { id: string; title: string; price: number; originalPrice?: number; image: string; isBundle?: boolean }, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...newItem, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode('');
    setPromoDiscountPercent(0);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FLEXIA10' || clean === 'NEWCART10') {
      setPromoCode(clean);
      setPromoDiscountPercent(10);
      return { success: true, message: '🎉 Promo code FLEXIA10 applied! 10% OFF discount added.' };
    } else if (clean === 'FLEXIA20') {
      setPromoCode(clean);
      setPromoDiscountPercent(20);
      return { success: true, message: '🎉 Promo code FLEXIA20 applied! 20% OFF discount added.' };
    } else {
      return { success: false, message: '❌ Invalid promo code. Try FLEXIA10 for 10% OFF.' };
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountAmount = Math.round((subtotal * promoDiscountPercent) / 100);
  const deliveryFee = deliveryType === 'CAMPUS' ? 500 : 1200;
  const total = Math.max(0, subtotal - discountAmount + (items.length > 0 ? deliveryFee : 0));
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryType,
        setDeliveryType,
        promoCode,
        promoDiscountPercent,
        applyPromoCode,
        subtotal,
        discountAmount,
        deliveryFee,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
