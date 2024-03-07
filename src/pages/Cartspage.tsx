import { Outlet } from 'react-router-dom';
import CartNav from '../components/cart/CartNav';

const Cartspage = () => {
  return (
    <>
      <CartNav />
      <section className="overflow-y-auto px-2 custom-scrollbar">
        <Outlet />
      </section>
    </>
  );
};

export default Cartspage;
