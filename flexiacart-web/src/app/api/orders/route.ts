import { NextResponse } from 'next/server';

export async function GET() {
  const mockOrders = [
    {
      id: 'FC-8924',
      user: 'Chinedu Okafor',
      locationType: 'CAMPUS',
      address: 'Queen Amina Hall, Room 104',
      totalAmount: 36500,
      status: 'DELIVERED',
      paymentMethod: 'TRANSFER',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'FC-8925',
      user: 'Tunde Balogun',
      locationType: 'CITY',
      address: '14 Allen Avenue, Ikeja',
      totalAmount: 49500,
      status: 'OUT_FOR_DELIVERY',
      paymentMethod: 'CARD',
      createdAt: new Date().toISOString(),
    },
  ];

  return NextResponse.json({
    success: true,
    total: mockOrders.length,
    data: mockOrders,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const orderNumber = 'FC-' + Math.floor(1000 + Math.random() * 9000);

    return NextResponse.json({
      success: true,
      message: 'Order created successfully and assigned to dispatch rider!',
      data: {
        id: orderNumber,
        ...body,
        status: 'PENDING_FULFILLMENT',
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create order' },
      { status: 400 }
    );
  }
}
