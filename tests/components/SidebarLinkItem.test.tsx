import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { Links } from '../../src/types/Links.type';
import SidebarLinkItem from '../../src/components/sidebar/SidebarLinkItem';

describe('SidebarLinkItem', () => {
  it('should render NavLink component with correct props when isActive is true', () => {
    const link: Links = {
      path: '/home',
      icon: <BiSolidDashboard />,
      label: 'Home',
    };
    const isActive = true;

    render(
      <BrowserRouter>
        <SidebarLinkItem link={link} isActive={isActive} />
      </BrowserRouter>
    );

    const navLink = screen.getByRole('link');
    expect(navLink).toHaveAttribute('href', '/home');
    expect(navLink).toHaveClass('active');
  });
});
