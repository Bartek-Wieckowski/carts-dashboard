import { BiCartAdd, BiListOl } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { Links } from '../../types/Links.type';
import CartNavLinkItem from './CartNavLinkItem';

const cartNavLinks: Links[] = [
  {
    path: '/carts',
    label: 'List',
    icon: <BiListOl />,
  },
  {
    path: '/carts/add',
    label: 'Add New',
    icon: <BiCartAdd />,
  },
];
const CartNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="p-3 w-full">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-400 border-b border-gray-700">
        {cartNavLinks.map((link) => (
          <CartNavLinkItem key={link.label} link={link} isActive={pathname === link.path} />
        ))}
      </ul>
    </nav>
  );
};

export default CartNav;
