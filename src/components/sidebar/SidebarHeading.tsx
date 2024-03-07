import { FaReact } from 'react-icons/fa';

const SidebarHeading = () => (
  <div className="flex items-center justify-center sm:gap-2">
    <FaReact className="animate-spin icons-size" />
    <span className="sidebar-links-text">Carts Dashboard</span>
  </div>
);

export default SidebarHeading;
