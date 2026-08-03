export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'Groceries' | 'Tech' | 'Dorm' | 'Fashion' | 'Provisions' | 'Electronics' | 'Furniture';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isExpress30Min: boolean;
  inStock: boolean;
  badge?: string;
  description: string;
  features: string[];
  deliveredSalesCount?: number; // Genuine completed deliveries only (Section 3)
  isFlashDeal?: boolean; // Must have genuine originalPrice (Section 3)
  isNewArrival?: boolean;
  locationZone: 'CAMPUS_AND_CITY' | 'CAMPUS_ONLY' | 'CITY_ONLY';
}

export interface Bundle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  itemsCount: number;
  itemsList: string[];
  image: string;
  targetAudience: 'Dorm Students' | 'Bachelors' | 'Family Home';
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'oraimo-freepods-4-wireless-earbuds',
    title: 'Oraimo FreePods 4 Active Noise Cancelling Earbuds',
    category: 'Tech',
    price: 24500,
    originalPrice: 29500,
    rating: 4.9,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '17% OFF',
    description: 'Experience crystal-clear audio and active noise cancellation for library study sessions or city commutes. Up to 36-hour total battery life with fast charging case.',
    features: ['Active Noise Cancellation (ANC)', '36 Hours Total Battery Life', 'Sweat & Dust Resistant (IPX5)', 'Low-Latency Gaming Mode'],
    deliveredSalesCount: 142,
    isFlashDeal: true,
    locationZone: 'CAMPUS_AND_CITY'
  },
  {
    id: '2',
    slug: 'indomie-super-pack-carton-40',
    title: 'Indomie Instant Noodles Super Pack (Carton of 40 x 120g)',
    category: 'Groceries',
    price: 18500,
    originalPrice: 21000,
    rating: 4.9,
    reviewsCount: 540,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '12% OFF',
    description: 'The staple for campus dorms and busy city bachelors. Genuine carton of 40 packs of 120g chicken flavor noodles. Fresh stock with long expiry date.',
    features: ['Carton of 40 x 120g Packs', 'Chicken Flavor Bestseller', 'Guaranteed Fresh Stock', '30-Minute Campus & City Express Delivery'],
    deliveredSalesCount: 384,
    isFlashDeal: true,
    locationZone: 'CAMPUS_AND_CITY'
  },
  {
    id: '3',
    slug: 'anker-20000mah-fast-charging-power-bank',
    title: 'Anker PowerCore 20,000mAh 22.5W Fast Charging Power Bank',
    category: 'Tech',
    price: 28000,
    originalPrice: 33000,
    rating: 4.8,
    reviewsCount: 219,
    image: 'https://images.unsplash.com/photo-1609592424209-c5c64c78d521?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '15% OFF',
    description: 'Never worry about power outages during exams or work deadlines. Dual USB-A and USB-C output ports with 22.5W PowerIQ fast charging.',
    features: ['20,000mAh Ultra-High Capacity', '22.5W Fast Charging USB-C', 'Charges Smartphones 4-5 Times', 'Compact & Scratch-Resistant Shell'],
    deliveredSalesCount: 96,
    isFlashDeal: true,
    locationZone: 'CAMPUS_AND_CITY'
  },
  {
    id: '4',
    slug: 'ergonomic-mesh-study-office-chair-adjustable',
    title: 'Ergonomic Mesh Study Desk & Office Chair with Lumbar Support',
    category: 'Furniture',
    price: 65000,
    originalPrice: 75000,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1580481077494-e3299ac2fef6?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: false,
    inStock: true,
    badge: '13% OFF',
    description: 'Modern ergonomic mesh office chair designed for long study sessions and remote work. Breathable backrest and heavy-duty swivel base.',
    features: ['Breathable Mesh Backrest', 'Adjustable Lumbar Support & Height', '360-Degree Swivel Base', 'Heavy-Duty 150KG Weight Capacity'],
    deliveredSalesCount: 45,
    isNewArrival: true,
    locationZone: 'CITY_ONLY'
  },
  {
    id: '5',
    slug: '4k-smart-led-tv-43-inch-android-hdr',
    title: '43-Inch 4K UHD Smart Android TV with Dolby Audio',
    category: 'Electronics',
    price: 285000,
    originalPrice: 320000,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: false,
    inStock: true,
    badge: '11% OFF',
    description: 'Experience stunning 4K Ultra HD picture quality and built-in Android OS. Stream YouTube, Netflix, and live sports with crystal clear audio.',
    features: ['43-Inch 4K Ultra HD LED Panel', 'Android TV OS with Built-in WiFi', 'Dolby Audio Surround Sound', '3 HDMI + 2 USB Ports'],
    deliveredSalesCount: 32,
    isNewArrival: true,
    locationZone: 'CITY_ONLY'
  },
  {
    id: '6',
    slug: 'golden-morn-family-cereal-900g',
    title: 'Golden Morn Maize & Soya Family Breakfast Cereal (900g Tin)',
    category: 'Provisions',
    price: 6800,
    originalPrice: 7500,
    rating: 4.9,
    reviewsCount: 382,
    image: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '9% OFF',
    description: 'Nutritious and delicious instant breakfast cereal made from Nigerian maize and soya. No cooking required—just add cold water or milk.',
    features: ['900g Large Family & Dorm Pack', 'Rich in Iron, Vitamins A & C', 'Instant Preparation', 'Locally Sourced Nigerian Maize'],
    deliveredSalesCount: 215,
    locationZone: 'CAMPUS_AND_CITY'
  },
  {
    id: '7',
    slug: '65w-gan-super-fast-charger-adapter-type-c',
    title: '65W GaN Dual Type-C Super Fast Charger Adapter + 100W Cable',
    category: 'Tech',
    price: 14500,
    originalPrice: 18000,
    rating: 4.8,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '19% OFF',
    description: 'Charge your laptop, smartphone, and earbuds simultaneously at full speed. Built with cutting-edge Gallium Nitride (GaN) for cool operation.',
    features: ['65W Maximum Power Output', 'Dual Type-C + Single USB-A Ports', 'Includes 1.5M 100W Braided Cable', 'Over-Voltage & Surge Protection'],
    deliveredSalesCount: 112,
    isFlashDeal: true,
    locationZone: 'CAMPUS_AND_CITY'
  },
  {
    id: '8',
    slug: 'titus-sardines-in-vegetable-oil-pack-of-6',
    title: 'Titus Sardines in Pure Vegetable Oil (Pack of 6 Cans x 125g)',
    category: 'Provisions',
    price: 8400,
    originalPrice: 9600,
    rating: 4.9,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: true,
    inStock: true,
    badge: '12% OFF',
    description: 'Premium quality Moroccan sardines packed in pure vegetable oil. Perfect protein addition to noodles, bread, and garri.',
    features: ['Pack of 6 x 125g Easy-Pull Cans', 'Rich in Omega-3 Fatty Acids & Protein', 'Genuine Moroccan Titus Brand', 'Long 3-Year Expiry Date'],
    deliveredSalesCount: 290,
    locationZone: 'CAMPUS_AND_CITY'
  }
];

export const BUNDLES: Bundle[] = [
  {
    id: 'b1',
    slug: 'dorm-freshers-starter-kit',
    title: 'Dorm Freshers Starter Kit',
    subtitle: 'Everything a university student needs for the first month on campus',
    price: 36500,
    originalPrice: 44000,
    discountPercent: 17,
    itemsCount: 5,
    itemsList: [
      '1x Indomie Super Pack (Carton of 40)',
      '1x Golden Morn Family Size (900g)',
      '1x 4-Socket Heavy Duty Extension Board',
      '1x Titus Sardines (Pack of 6 Cans)',
      '1x Rechargeable LED Desk Study Lamp'
    ],
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80',
    targetAudience: 'Dorm Students'
  },
  {
    id: 'b2',
    slug: 'bachelor-essential-provision-combo',
    title: 'Bachelor Essential Provision Combo',
    subtitle: 'Smart food & tech essentials for busy working professionals and bachelors',
    price: 49500,
    originalPrice: 59000,
    discountPercent: 16,
    itemsCount: 4,
    itemsList: [
      '1x Indomie Super Pack (Carton of 40)',
      '1x Anker 20,000mAh 22.5W Power Bank',
      '1x 65W GaN Super Fast Type-C Charger',
      '1x Titus Sardines (Pack of 6 Cans)'
    ],
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=600&q=80',
    targetAudience: 'Bachelors'
  },
  {
    id: 'b3',
    slug: 'family-weekend-feast-grocery-pack',
    title: 'Family Weekend Feast Grocery Pack',
    subtitle: 'Bulk grocery savings delivered right to your city residential doorstep',
    price: 58000,
    originalPrice: 71000,
    discountPercent: 18,
    itemsCount: 6,
    itemsList: [
      '2x Indomie Super Pack (Cartons of 40)',
      '2x Golden Morn Family Size (900g Tins)',
      '2x Titus Sardines (Packs of 6 Cans)',
      '1x Checkers Custard Big Pack (2kg)'
    ],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    targetAudience: 'Family Home'
  }
];
