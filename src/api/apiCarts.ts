import { Cart, CartResponse, addCartProductQuantity } from '../types/Cart.type';
import { Product } from '../types/Product.type';
import { API_BASE_URL, API_BASE_URL_PRODUCTS } from './constants';

export async function getCarts(page: number = 1): Promise<CartResponse> {
  const limit = 4;
  const skip = (page - 1) * limit;

  const res = await fetch(`${API_BASE_URL}?skip=${skip}&limit=${limit}`);
  const data = await res.json();

  return data;
}

export async function addCart(values: addCartProductQuantity): Promise<Cart> {
  const res = await fetch(`${API_BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  const data = await res.json();

  return data;
}

export async function deleteCart(cartId: number) {
  const res = await fetch(`${API_BASE_URL}/${cartId}`, {
    method: 'DELETE',
  });
  const data = await res.json();

  return data;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL_PRODUCTS}`);
  const data = await res.json();

  return data.products;
}
