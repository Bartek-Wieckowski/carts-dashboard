import { createContext, useReducer } from 'react';
import { Cart } from '../types/Cart.type';

export type CartContextType = {
  cartsData: Cart[];
  dispatch: React.Dispatch<CartsAction>;
};

export type CartsState = Cart[];

export type CartsAction = { type: 'ADD_CART'; payload: Cart } | { type: 'REMOVE_CART'; payload: number };

export const initialState: CartsState = [];

export const CartContext = createContext<CartContextType | null>(null);

function reducer(state = initialState, action: CartsAction): CartsState {
  switch (action.type) {
    case 'ADD_CART': {
      const timestamp = new Date().getTime();
      const newCart = { ...action.payload, id: timestamp, ownAddCart: true };
      return [...state, newCart];
    }
    case 'REMOVE_CART': {
      return state.filter((cart) => cart.id !== action.payload);
    }
    default:
      return state;
  }
}

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartsData, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{ cartsData, dispatch }}>{children}</CartContext.Provider>;
}
export { CartProvider };
