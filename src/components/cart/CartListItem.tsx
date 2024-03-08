import { useState } from 'react';
import { Cart } from '../../types/Cart.type';
import Button from '../Button';

type CartListItemProps = {
  cart: Cart;
};

const CartListItem = ({ cart }: CartListItemProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

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

  return (
    <tbody>
      <tr className=" border-b bg-gray-800 border-gray-700  hover:bg-gray-600">
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
              <Button onClick={() => console.log(`delete ${cart.id}`)} btnStyles="btnDelete">
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
