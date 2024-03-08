import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Button from '../Button';

type CartListPaginationProps = {
  paginationProps: {
    onNextPage: () => void;
    onPrevPage: () => void;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalPages: number;
    currentPage: number;
  };
};

const CartListPagination = ({ paginationProps }: CartListPaginationProps) => {
  const { onNextPage, onPrevPage, hasNextPage, hasPrevPage, totalPages, currentPage } = paginationProps;
  return (
    <div className="flex gap-3 mt-3">
      <Button onClick={onPrevPage} btnStyles="btnQty" disabled={!hasPrevPage}>
        <BiChevronLeft />
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button onClick={onNextPage} btnStyles="btnQty" disabled={!hasNextPage}>
        <BiChevronRight />
      </Button>
    </div>
  );
};

export default CartListPagination;
