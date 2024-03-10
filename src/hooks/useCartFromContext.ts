import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function useCartFromContext() {
  const context = useContext(CartContext);
  if (context === undefined || context === null) throw new Error('CartContext was used outside CartProvider');
  return context;
}
