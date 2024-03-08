import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCart as deleteCartApi } from '../../apiCarts';
import { QUERY_KEY } from '../../constants';
import { useState } from 'react';

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const [isDeleted, setIsDeleted] = useState(false);

  const { isPending: isDeleting, mutate: deleteCart } = useMutation({
    mutationFn: deleteCartApi,
    onSuccess: (data) => {
      setIsDeleted(data.isDeleted);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.carts],
      });
    },
  });

  return { isDeleting, deleteCart, isDeleted };
}
