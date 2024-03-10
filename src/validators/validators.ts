import * as yup from 'yup';
export const cartAddSchema = yup.object({
    userId: yup.number(),
    products: yup.array().of(
      yup.object({
        id: yup.number().required('Required field'),
        quantity: yup
          .number()
          .required('Required field and only numer allowed')
          .typeError('Quantity must be a number')
          .positive('Quantity must be a positive number')
          .integer('Quantity must be an integer'),
      })
    ),
  });
  
  export type AddCartFormValues = yup.InferType<typeof cartAddSchema>;