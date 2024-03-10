import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCart as addCartApi } from '../../apiCarts';
import { QUERY_KEY } from '../../constants';
import { useCartFromContext } from '../../../hooks/useCartFromContext';

export function useAddCart() {
  const queryClient = useQueryClient();
  const { dispatch } = useCartFromContext();

  const { isPending: isAdding, mutate: addCart } = useMutation({
    mutationFn: addCartApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.carts],
      });
      dispatch({ type: 'ADD_CART', payload: data });
    },
  });

  return { isAdding, addCart };
}
