import createCategoryService from "../../services/categories/createCategory.service.js";

const createCategoryController = async (req, res) => {
  const param = req.body;
  const [status, data] = await createCategoryService(param);
  res.status(status).json(data);
};

export default createCategoryController;
