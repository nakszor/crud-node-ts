import * as yup from "yup";

const createCategorySerializer = yup.object().shape({
  name: yup.string().required(),
});

const categoryResponseSerializer = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
});

const listCategoriesSerializer = yup.array(categoryResponseSerializer);

export {
  createCategorySerializer,
  categoryResponseSerializer,
  listCategoriesSerializer,
};
