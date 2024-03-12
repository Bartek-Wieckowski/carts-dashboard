import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSingleCart } from '../../api/carts/queries/useSingleCart';
import { useParams } from 'react-router-dom';
import { useCartFromContext } from '../../hooks/useCartFromContext';
import Loader from '../Loader';
import Error from '../Error';

const CartSingle = () => {
  const { id } = useParams();
  const { isLoading, isError, singleCart } = useSingleCart(Number(id));
  const { cartsData } = useCartFromContext();
  const isUserAddedCart = cartsData[0]?.ownAddCart;
  let products;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  if (singleCart) {
    products = singleCart?.products;
  } else if (isUserAddedCart) {
    const getSingleObjCartFromContext = cartsData?.find((cartContextId) => cartContextId.id === Number(id));
    products = getSingleObjCartFromContext?.products;
  } else {
    return <div className="text-center text-5xl text-rose-400">Not found cart of ID: {id}</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-screen py-">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={products}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="title" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="discountedPrice" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CartSingle;
