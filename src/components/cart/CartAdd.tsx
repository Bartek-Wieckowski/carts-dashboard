import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { AddCartFormValues, cartAddSchema } from '../../validators/validators';
import { useProducts } from '../../api/products/queries/useProducts';
import { useAddCart } from '../../api/carts/mutations/useAddCart';
import { BiX } from 'react-icons/bi';
import Button from '../Button';

const CartAdd = () => {
  const { addCart } = useAddCart();
  const { products: allProductsFromApi } = useProducts();
  const [formikValues, setFormikValues] = useState<AddCartFormValues>({
    userId: 1,
    products: [{ id: 0, quantity: 1 }],
  });
  const [chosenProducts, setChosenProducts] = useState<number[]>([]);
  const navigate = useNavigate();

  const formik = useFormik<AddCartFormValues>({
    initialValues: formikValues,
    onSubmit: (values: AddCartFormValues) => {
      const hasNoProductId = values.products && values.products.some((product) => product.id === 0);

      if (hasNoProductId) {
        alert('Please fill in all quantity fields or select product.');
      } else if (values.products?.length === 0) {
        alert('Please add some product in cart');
      } else {
        if (values.userId && values.products) {
          addCart(values);
          navigate('/carts');
        }
      }
    },
    validationSchema: cartAddSchema,
  });

  const handleAddNewProductInputs = () => {
    const newProduct = { id: 0, quantity: 1 };
    const newFormikValues = {
      ...formikValues,
      products: [...(formik.values.products || []), newProduct],
    };
    formik.setValues(newFormikValues);
    setFormikValues(newFormikValues);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const productId = Number(event.target.value);
    const previousProductId = formikValues.products?.[index].id as number;

    const updatedChosenProducts = chosenProducts.filter((id) => id !== previousProductId);
    setChosenProducts(updatedChosenProducts);

    setChosenProducts([...updatedChosenProducts, productId]);

    const updatedProducts = formikValues.products?.map((product, i) => {
      if (i === index) {
        return { ...product, id: productId };
      }
      return product;
    });

    const updatedQuantities = formik.values.products?.map((product, i) => {
      if (i === index) {
        return product?.quantity || 1
      }
      return formik.values.products?.[i]?.quantity
    });

    const newFormikValues = {
      ...formikValues,
      products: updatedProducts,
    };

    formik.setValues({
      ...newFormikValues,
      products: newFormikValues.products?.map((product, i) => ({
        ...product,
        quantity: updatedQuantities?.[i] || 1,
      })),
    });
    setFormikValues(newFormikValues);
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = formikValues.products?.filter((_, i) => i !== index);

    const newFormikValues = {
      ...formikValues,
      products: updatedProducts,
    };

    formik.setValues(newFormikValues);
    setFormikValues(newFormikValues);

    const deletedProductId = Number(formikValues.products?.[index].id);
    if (chosenProducts.includes(deletedProductId)) {
      const updatedChosenProducts = chosenProducts.filter((id) => id !== deletedProductId);
      setChosenProducts(updatedChosenProducts);
    }
  };

  return (
    <>
      <Button type="button" onClick={handleAddNewProductInputs} btnStyles="btnEdit">
        Add New Product in Cart
      </Button>
      <form onSubmit={formik.handleSubmit}>
        <div className="mx-auto my-2 w-full px-3 flex-center flex-wrap gap-3">
          {formik.values.products?.map((product, index) => (
            <div key={index} className="flex flex-col max-w-[350px] border border-white p-2 rounded-lg relative">
              <div className="absolute right-2 bottom-0">
                <Button type="button" btnStyles="btnDelete" onClick={() => handleRemoveProduct(index)}>
                  <BiX className="text-lg" />
                </Button>
              </div>
              <div className="mb-5">
                <select className="text-black" name={`products[${index}].id`} onChange={(e) => handleProductChange(e, index)} value={formik.values.products?.[index].id || ''}>
                  {formik.values.products?.[index].id ? (
                    <option value={formik.values.products?.[index].id}>
                      {allProductsFromApi?.find((product) => Number(product.id) === formik.values.products?.[index].id)?.title}
                    </option>
                  ) : (
                    <option value="">Select a product...</option>
                  )}
                  {allProductsFromApi?.map(
                    (productAPI) =>
                      !chosenProducts.includes(Number(productAPI.id)) && (
                        <option key={productAPI.id} value={productAPI.id}>
                          {productAPI.title}
                        </option>
                      )
                  )}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2 pb-8">
                <div className="mb-5">
                  <label htmlFor={`id_${product.id}`} className="block mb-2 text-sm font-medium text-white">
                    Product ID
                  </label>
                  <input
                    type="text"
                    id={`id${product.id}`}
                    name={`products[${index}].productID`}
                    className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 opacity-50"
                    value={product.id === 0 ? 'Select Product' : product.id}
                    placeholder="Select product from the list"
                    disabled={true}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor={`quantity_${product.id}`} className="block mb-2 text-sm font-medium text-white">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id={`quantity_${product.id}`}
                    name={`products[${index}].quantity`}
                    className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    onChange={formik.handleChange}
                    value={formik.values.products?.[index]?.quantity || ''}
                    placeholder="ex. 1,2,20"
                  />
                  {/* 
                  //FIXME: nie wiem ja nie umiem tutaj napisac tak tej walidacji aby tsc nie wywalał info o bledzie
                  //FIXME: co smieszniejsze apka działa i error o walidacji sie pojawia...
                   */}
                  {formik.touched.products?.[index]?.quantity && formik.errors.products?.[index]?.quantity ? (
                    <div className="text-rose-400 text-[10px] mt-2">{formik.errors.products?.[index]?.quantity}</div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button type="submit" btnStyles="btnAdd">
          Send
        </Button>
      </form>
    </>
  );
};

export default CartAdd;
