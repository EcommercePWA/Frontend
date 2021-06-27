// states
export interface User {
  name: string;
  uid: string;
  cart: Product[];
}

export interface UserPart {
  name?: string;
  uid?: string;
  cart?: Product[];
}

export interface CartItem {
  product_id: string;
  amount: number;
}

export interface Product {
  pid: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface ExploreItemType {
  name: string;
  src: string;
  color: string;
  size: number;
}

export interface ImageSlideType {
  url: string;
  description?: string;
}

export interface RecommendedItems {
  Item_id: string | number;
  Name: string;
  Price: string;
  Description: string;
  Category: string;
  Image: string;
}
