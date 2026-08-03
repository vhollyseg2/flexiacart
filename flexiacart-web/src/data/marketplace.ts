export type VerificationLevel = 'UNVERIFIED' | 'IDENTITY_VERIFIED' | 'PAYMENT_VERIFIED' | 'TRUSTED_SELLER';

export interface SellerStore {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  bannerUrl: string;
  description: string;
  location: string;
  memberSince: string;
  verificationLevel: VerificationLevel;
  deliveredSalesCount: number;
  verifiedReviewsCount: number;
  rating: number;
  returnPolicy: string;
  pickupInfo: string;
  approvedProductsCount: number;
}

export interface SellerEarnings {
  sellerId: string;
  grossSales: number;
  platformCommissionRate: number; // e.g. 0.05 for 5%
  platformCommissionAmount: number;
  paymentFees: number;
  deliveryAllocation: number;
  netEarnings: number;
  pendingEarnings: number;
  availableEarnings: number;
  refundDeductions: number;
  ledger: {
    id: string;
    orderNumber: string;
    date: string;
    amount: number;
    commission: number;
    net: number;
    status: 'PENDING' | 'AVAILABLE' | 'REFUNDED';
    note: string;
  }[];
}

export interface SupportTicket {
  id: string;
  userEmail: string;
  subject: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  messages: {
    sender: 'USER' | 'ASSISTANT' | 'HUMAN_MODERATOR';
    text: string;
    timestamp: string;
  }[];
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'ORDER' | 'PAYMENT' | 'SELLER_APPROVAL' | 'EARNINGS' | 'SUPPORT';
  timestamp: string;
  read: boolean;
  link?: string;
}

export const SELLERS: SellerStore[] = [
  {
    id: 'store_01',
    slug: 'chinedu-tech-and-groceries',
    name: 'Chinedu Tech & Groceries Store',
    logoUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'Trusted campus & city supplier of authentic electronic gadgets, sound gear, and bulk noodle cartons. All items 100% verified with manufacturer warranty.',
    location: 'Queen Amina Hall Gate, Campus Zone / Ikeja Hub',
    memberSince: 'January 2025',
    verificationLevel: 'TRUSTED_SELLER',
    deliveredSalesCount: 1420,
    verifiedReviewsCount: 384,
    rating: 4.9,
    returnPolicy: '7-Day Return for defective electronics. Must be in original undamaged box with serial number.',
    pickupInfo: 'Safe pickup available at Ikeja Hub or Campus Gate Store between 9 AM and 6 PM.',
    approvedProductsCount: 14,
  },
  {
    id: 'store_02',
    slug: 'ikeja-gadgets-house',
    name: 'Ikeja Gadgets & Provisions House',
    logoUrl: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    description: 'Wholesale & retail electronics and daily provisions delivered in 30 minutes across town.',
    location: '14 Allen Avenue, Ikeja, Lagos',
    memberSince: 'March 2025',
    verificationLevel: 'PAYMENT_VERIFIED',
    deliveredSalesCount: 680,
    verifiedReviewsCount: 192,
    rating: 4.8,
    returnPolicy: '3-Day replacement guarantee for faulty adapters and cables.',
    pickupInfo: 'Pickup available at Allen Avenue showroom.',
    approvedProductsCount: 9,
  }
];

export const MOCK_EARNINGS: SellerEarnings = {
  sellerId: 'store_01',
  grossSales: 890000,
  platformCommissionRate: 0.05,
  platformCommissionAmount: 44500,
  paymentFees: 13350,
  deliveryAllocation: 35000,
  netEarnings: 867150,
  pendingEarnings: 145000,
  availableEarnings: 722150,
  refundDeductions: 0,
  ledger: [
    {
      id: 'led_101',
      orderNumber: 'FC-8924',
      date: '2026-08-03',
      amount: 36500,
      commission: 1825,
      net: 34675,
      status: 'AVAILABLE',
      note: 'Delivered and verified by buyer'
    },
    {
      id: 'led_102',
      orderNumber: 'FC-8925',
      date: '2026-08-03',
      amount: 49500,
      commission: 2475,
      net: 47025,
      status: 'PENDING',
      note: 'Order in transit — pending delivery confirmation'
    }
  ]
};

export const MOCK_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'n_01',
    title: '🎉 Order #FC-8924 Delivered',
    message: 'Buyer confirmed delivery. Net earnings of ₦34,675 released to Available Earnings.',
    type: 'EARNINGS',
    timestamp: '10 mins ago',
    read: false,
    link: '/seller/earnings'
  },
  {
    id: 'n_02',
    title: '🛡️ New Seller Application Approved',
    message: 'Your store verification level is now Trusted Seller. All genuine sales metrics active.',
    type: 'SELLER_APPROVAL',
    timestamp: '2 hours ago',
    read: true,
    link: '/store/chinedu-tech-and-groceries'
  },
  {
    id: 'n_03',
    title: '💬 New Message from Buyer',
    message: 'Ngozi Eze sent a message regarding Oraimo FreePods 4 warranty.',
    type: 'SUPPORT',
    timestamp: '5 hours ago',
    read: false,
    link: '/messages'
  }
];
