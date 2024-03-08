import { Product } from './Product.type';

export type CartResponse = {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
};

export type Cart = {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};
