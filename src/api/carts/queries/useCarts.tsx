import { useQuery } from '@tanstack/react-query';
import { getCarts } from '../../apiCarts';
import { QUERY_KEY } from '../../constants';

export function useCarts(page: number = 1) {
  const { isLoading, isError, data } = useQuery({
    queryKey: [QUERY_KEY.carts, page],
    queryFn: () => getCarts(page),
  });

  const carts = data?.carts ?? [];
  const limit = data?.limit ?? 0;
  const skip = data?.skip ?? 0;
  const total = data?.total ?? 0;

  return { isLoading, isError, carts, limit, skip, total };
}
