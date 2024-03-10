import { useState } from 'react';
import { useCarts } from '../../api/carts/queries/useCarts';
import { Cart } from '../../types/Cart.type';
import CartListItem from './CartListItem';
import CartListTable from './CartListTable';
import CartListTableHeader from './CartListTableHeader';
import CartListPagination from './CartListPagination';
import Error from '../Error';
import Loader from '../Loader';
import { useCartFromContext } from '../../hooks/useCartFromContext';

const CartLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isError, carts: cartsFromQuery, limit, total } = useCarts(currentPage);
  const { cartsData: addedCarts } = useCartFromContext();
  const carts = addedCarts.concat(cartsFromQuery);

  const totalPages = Math.ceil(total / limit);
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  const paginationProps = {
    onNextPage: handleNextPage,
    onPrevPage: handlePrevPage,
    hasNextPage: !!nextPage,
    hasPrevPage: !!prevPage,
    totalPages: totalPages,
    currentPage: currentPage,
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="flex-center flex-col">
      <h1>All Carts</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full py-3">
        <CartListTable>
          <CartListTableHeader />
          {carts?.map((cart: Cart) => (
            <CartListItem key={cart.id} cart={cart} />
          ))}
        </CartListTable>
        <CartListPagination paginationProps={paginationProps} />
      </div>
    </div>
  );
};

export default CartLists;
