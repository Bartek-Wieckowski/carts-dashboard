import { Link } from 'react-router-dom';
import { Links } from '../../types/Links.type';

type CartNavLinkItemProps = {
  link: Links;
  isActive: boolean;
};

const CartNavLinkItem = ({ link, isActive }: CartNavLinkItemProps) => {
  return (
    <li key={link.label} className="me-2">
      <Link to={link.path} aria-current="page" className={`flex items-center sm:gap-2 p-4 text-whit bg-gray-800 rounded-t-lg   ${isActive ? 'text-rose-400 ' : ''}`}>
        {link.icon}
        <span className="sidebar-links-text">{link.label}</span>
      </Link>
    </li>
  );
};

export default CartNavLinkItem;
