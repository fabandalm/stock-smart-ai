export interface Supplier {
  id: number;
  name: string;
  contact: string;
  address: string;
  telephone: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: Category;
  supplier: Supplier;
  barCode: string;
}

export interface OutboundStock {
  id: number;
  product: Product;
  quantity: number;
  date: Date;
  destination: string;
}
export interface InboundStock {
  id: number;
  product: Product;
  quantity: number;
  date: Date;
  supplier: Supplier;
}
export interface IOStock {
  id: number;
  type: string;
  product: string;
  quantity: number;
  date: Date;
  facilitator: string;
}
export interface Stats {
  supplierNumber: number;
  productNumber: number;
  categoryNumber: number;
  outOfStock: number;
}
export interface Message {
  id: number;
  content: string;
  title: string;
  isRead: boolean;
  createdAt: Date;
}
export interface AuthToken {
  accessToken: string;
  tokenType: string;
}
export type UserProfile = {
  userName: string;
  email: string;
};
export interface IOStockCharts {
  month: string;
  totalQuantity: number;
}
