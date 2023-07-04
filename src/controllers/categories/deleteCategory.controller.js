import deleteCategoryService from "../../services/categories/deleteCategories.service.js";

const deleteCategorycontroller = async (req, res) => {
  const [status, data] = await deleteCategoryService(req.params.id);
  res.status(status).json(data);
};
export default deleteCategorycontroller;
