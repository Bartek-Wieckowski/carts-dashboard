import { useLocation } from 'react-router-dom';
import { BiSolidDashboard, BiListOl } from 'react-icons/bi';
import { Links } from '../../types/Links.type';
import SidebarHeading from './SidebarHeading';
import SidebarLinkItem from './SidebarLinkItem';

const sideBarLinks: Links[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: <BiSolidDashboard />,
  },
  {
    path: '/carts',
    label: 'Orders',
    icon: <BiListOl />,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="sidebar-container" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <SidebarHeading />
        <ul className="flex flex-col gap-2 mb-2 mt-6 font-medium">
          {sideBarLinks.map((link) => (
            <SidebarLinkItem key={link.label} link={link} isActive={pathname === link.path} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
