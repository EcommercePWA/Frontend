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

export interface NavMenuApp {
  href: string;
  name: string;
}
