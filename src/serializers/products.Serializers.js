import * as yup from "yup";

const productResponseSerializer = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.string().required(),
});

const editProductSerializer = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
});

const listProductsSerializer = yup.array(productResponseSerializer);

export {
  editProductSerializer,
  productResponseSerializer,
  listProductsSerializer,
};
