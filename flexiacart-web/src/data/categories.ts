// Section 4: Consistent Category System (12 Standard Categories)
export const MARKETPLACE_CATEGORIES = [
  'Phones and Accessories',
  'Electronics',
  'Fashion',
  'Apartment and Home',
  'Furniture',
  'Beauty and Health',
  'Books and Education',
  'Groceries',
  'Sports and Fitness',
  'Baby and Kids',
  'Automotive',
  'Other Products',
] as const;

export type MarketplaceCategory = typeof MARKETPLACE_CATEGORIES[number];
