import { useQuery } from '@tanstack/react-query';
import { getSingleCart } from '../../apiCarts';
import { QUERY_KEY } from '../../constants';

export function useSingleCart(cartId: number) {
  const {
    isLoading,
    isError,
    data: singleCart,
  } = useQuery({
    queryKey: [QUERY_KEY.singleCart, cartId],
    queryFn: () => getSingleCart(cartId),
    enabled: cartId >= 1 && cartId <= 20,
  });

  return { isLoading, isError, singleCart };
}
