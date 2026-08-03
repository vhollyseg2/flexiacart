export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'Groceries' | 'Tech' | 'Dorm' | 'Fashion' | 'Provisions';
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
    features: ['Active Noise Cancellation (ANC)', '36 Hours Total Battery Life', 'Sweat & Dust Resistant (IPX5)', 'Low-Latency Gaming Mode']
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
    badge: 'Bestseller',
    description: 'The #1 staple for campus dorms and busy city bachelors. Genuine carton of 40 packs of 120g chicken flavor noodles. Fresh stock with long expiry date.',
    features: ['Carton of 40 x 120g Packs', 'Chicken Flavor Bestseller', 'Guaranteed Fresh Stock', '30-Minute Campus & City Express Delivery']
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
    features: ['20,000mAh Ultra-High Capacity', '22.5W Fast Charging USB-C', 'Charges Smartphones 4-5 Times', 'Compact & Scratch-Resistant Shell']
  },
  {
    id: '4',
    slug: 'rechargeable-dorm-study-table-fan-led',
    title: 'Mini 8-Inch Rechargeable Dorm Table Fan with Study LED Lamp',
    category: 'Dorm',
    price: 16000,
    originalPrice: 19500,
    rating: 4.7,
    reviewsCount: 148,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: false,
    inStock: true,
    badge: 'Dorm Essential',
    description: 'Stay cool and illuminate your desk during late-night study sessions. Built-in 4000mAh battery lasts up to 8 hours on low speed.',
    features: ['3-Speed Silent Brushless Motor', 'Integrated Dimmable LED Study Lamp', '4000mAh Lithium Battery (8 Hours Run Time)', 'USB Type-C Charging Input']
  },
  {
    id: '5',
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
    badge: 'Fresh Stock',
    description: 'Nutritious and delicious instant breakfast cereal made from Nigerian maize and soya. No cooking required—just add cold water or milk.',
    features: ['900g Large Family & Dorm Pack', 'Rich in Iron, Vitamins A & C', 'Instant Preparation', 'Locally Sourced Nigerian Maize']
  },
  {
    id: '6',
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
    features: ['65W Maximum Power Output', 'Dual Type-C + Single USB-A Ports', 'Includes 1.5M 100W Braided Cable', 'Over-Voltage & Surge Protection']
  },
  {
    id: '7',
    slug: '4-socket-extension-board-surge-protector-3m',
    title: '4-Socket Heavy Duty Extension Board with Surge Protection & USB (3M Cable)',
    category: 'Dorm',
    price: 9500,
    originalPrice: 11500,
    rating: 4.7,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    isExpress30Min: false,
    inStock: true,
    badge: 'Top Safety',
    description: 'Protect your valuable laptop and chargers from power surges. Includes 4 UK sockets and 3 fast-charging USB ports with 3-meter heavy-duty cable.',
    features: ['4 UK Standard Safety Sockets', '3 Integrated USB 2.4A Charging Ports', '3-Meter Heavy-Duty Copper Cable', 'Built-in 2500W Surge Protection Switch']
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
    badge: 'Bestseller',
    description: 'Premium quality Moroccan sardines packed in pure vegetable oil. Perfect protein addition to noodles, bread, and garri.',
    features: ['Pack of 6 x 125g Easy-Pull Cans', 'Rich in Omega-3 Fatty Acids & Protein', 'Genuine Moroccan Titus Brand', 'Long 3-Year Expiry Date']
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
