import listProductsByCategoryService from "../../services/products/listProductsByCategories.service.js";

const listProductsByCategoryController = async (req, res) => {
  const [status, data] = await listProductsByCategoryService(req.params.id);

  res.status(status).json(data);
};

export default listProductsByCategoryController;
