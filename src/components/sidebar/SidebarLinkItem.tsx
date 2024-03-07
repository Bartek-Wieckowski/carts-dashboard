import { Links } from '../../types/Links.type';
import { NavLink } from 'react-router-dom';

type SidebarLinkItemProps = {
  link: Links;
  isActive: boolean;
};

const SidebarLinkItem = ({ link, isActive }: SidebarLinkItemProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={`flex items-center justify-center sm:justify-start sm:gap-2 p-2 rounded-lg text-white hover:bg-slate-900 bg-gray-700 group ${isActive ? 'active' : ''}`}
      >
        {link.icon}
        <span className="sidebar-links-text">{link.label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarLinkItem;
