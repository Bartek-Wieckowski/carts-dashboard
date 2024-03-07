import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const AppLayout = () => {
  return (
    <main className="app-container">
      <Sidebar />
      <section className="section-container">
        <Outlet />
      </section>
    </main>
  );
};

export default AppLayout;
