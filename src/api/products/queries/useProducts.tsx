import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '../../constants';
import { getProducts } from '../../apiCarts';

export function useProducts() {
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery({
    queryKey: [QUERY_KEY.products],
    queryFn: getProducts,
  });

  return { isLoading, isError, products };
}
