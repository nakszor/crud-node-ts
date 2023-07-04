import listCategoryService from "../../services/categories/listCategories.service.js";

const listCategoryController = async (req, res) => {
  const [status, data] = await listCategoryService();

  res.status(status).json(data);
};

export default listCategoryController;
