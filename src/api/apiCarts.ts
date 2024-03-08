import { CartResponse } from '../types/Cart.type';
import { API_BASE_URL } from './constants';

export async function getCarts(page: number = 1): Promise<CartResponse> {
  const limit = 4;
  const skip = (page - 1) * limit;

  const res = await fetch(`${API_BASE_URL}?skip=${skip}&limit=${limit}`);
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
