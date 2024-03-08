const CartListTableHeader = () => {
  return (
    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
      <tr>
        <th scope="col" className="p-4"></th>
        <th scope="col" className="px-6 py-3 text-center">
          UserId
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Total Products
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Total Quantity
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Total Price
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default CartListTableHeader;
