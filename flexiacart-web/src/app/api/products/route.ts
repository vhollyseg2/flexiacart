import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';

export async function GET() {
  return NextResponse.json({
    success: true,
    total: PRODUCTS.length,
    data: PRODUCTS,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProduct = {
      id: 'p_' + Date.now(),
      slug: (body.title || 'new-product').toLowerCase().replace(/\s+/g, '-'),
      title: body.title || 'New Listed Product',
      category: body.category || 'Provisions',
      price: Number(body.price) || 5000,
      rating: 5.0,
      reviewsCount: 1,
      image: body.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80',
      isExpress30Min: true,
      inStock: true,
      description: body.description || 'Verified seller listing.',
      features: ['Verified Vendor Item', 'Fast Campus & City Delivery'],
    };

    return NextResponse.json({
      success: true,
      message: 'Product listed successfully and submitted for moderation queue!',
      data: newProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid request payload' },
      { status: 400 }
    );
  }
}
