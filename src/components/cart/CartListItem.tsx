import { useState } from 'react';
import { Cart } from '../../types/Cart.type';
import { useDeleteCart } from '../../api/carts/mutations/useDeleteCart';
import Button from '../Button';
import Loader from '../Loader';
import { useCartFromContext } from '../../hooks/useCartFromContext';

type CartListItemProps = {
  cart: Cart;
};

const CartListItem = ({ cart }: CartListItemProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { isDeleting, deleteCart, isDeleted } = useDeleteCart();
  const { dispatch } = useCartFromContext();

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prevState) => {
      const isSelected = prevState.includes(itemId);

      if (isSelected) {
        return prevState.filter((id) => id !== itemId);
      } else {
        return [...prevState, itemId];
      }
    });
  };

  const handleDeleteCart = (cart: Cart) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this cart?');

    if (shouldDelete) {
      if (cart.ownAddCart) {
        dispatch({ type: 'REMOVE_CART', payload: cart.id });
      } else {
        deleteCart(cart.id);
      }
    }
  };

  if (isDeleting) return <Loader />;

  return (
    <tbody>
      <tr className={`border-b bg-gray-800 border-gray-700  hover:bg-gray-600 ${isDeleted && 'hidden'}`}>
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id={cart.id.toString()}
              type="checkbox"
              onChange={() => handleCheckboxChange(cart.id)}
              checked={selectedItems.includes(cart.id)}
              className="w-4 h-4  rounded  ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
            />
            <label htmlFor={cart.id.toString()} className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="px-6 py-4 font-medium whitespace-nowraptext-white text-center">
          {cart.userId}
        </th>
        <td className="px-6 py-4 text-center"> {cart.totalProducts}</td>
        <td className="px-6 py-4 text-center">{cart.totalQuantity}</td>
        <td className="px-6 py-4 text-center">${cart.total}</td>
        <td className="px-6 py-4">
          <div className="flex-center">
            <Button to={`/carts/${cart.id}`} btnStyles="btnUpdate">
              Details
            </Button>
            <div className={`${selectedItems.includes(cart.id) ? 'block' : 'hidden'}`}>
              <Button onClick={() => handleDeleteCart(cart)} btnStyles="btnDelete">
                Delete
              </Button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CartListItem;
