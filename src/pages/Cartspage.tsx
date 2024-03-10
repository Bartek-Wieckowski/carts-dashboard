import { Outlet } from 'react-router-dom';
import CartNav from '../components/cart/CartNav';
import { CartProvider } from '../contexts/CartContext';

const Cartspage = () => {
  return (
    <>
      <CartNav />
      <CartProvider>
        <section className="overflow-y-auto px-2 custom-scrollbar">
          <Outlet />
        </section>
      </CartProvider>
    </>
  );
};

export default Cartspage;
