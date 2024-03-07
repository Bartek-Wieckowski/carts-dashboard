import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ROUTES } from './constants';

const AppLayout = lazy(() => import('../components/AppLayout'));
const Homepage = lazy(() => import('../pages/Homepage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cartspage = lazy(() => import('../pages/Cartspage'));
const CartAdd = lazy(() => import('../components/cart/CartAdd'));
const CartsList = lazy(() => import('../components/cart/CartsList'));
const CartSingle = lazy(() => import('../components/cart/CartSingle'));
const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path={ROUTES.home} element={<Homepage />} />
      <Route path={ROUTES.carts} element={<Cartspage />}>
        <Route index element={<CartsList />} />
        <Route path={ROUTES.cartAdd} element={<CartAdd />} />
        <Route path={ROUTES.cart(':id')} element={<CartSingle />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route errorElement={<ErrorBoundary />} />
    </Route>
  )
);
