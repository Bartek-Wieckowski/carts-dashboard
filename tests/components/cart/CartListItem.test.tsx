import { render, screen } from '@testing-library/react';
import CartListItem from '../../../src/components/cart/CartListItem';
import { Cart } from '../../../src/types/Cart.type';
import userEvent from '@testing-library/user-event';
import AllProviders from '../../../src/AllProviders';
import { CartProvider } from '../../../src/contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('CartListItem', () => {
  it('should enable delete button when the checkbox is checked', async () => {
    const cart: Cart = {
      id: 1,
      products: [],
      total: 0,
      discountedTotal: 0,
      userId: 1,
      totalProducts: 0,
      totalQuantity: 0,
    };
    render(
      <AllProviders>
        <BrowserRouter>
          <CartProvider>
            <CartListItem cart={cart} />
          </CartProvider>
        </BrowserRouter>
      </AllProviders>
    );

    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Delete');
  });
});
