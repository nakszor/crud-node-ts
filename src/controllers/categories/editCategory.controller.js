import editCategoryService from "../../services/categories/editCategory.service.js";

const editCategoryController = async (req, res) => {
  const data = req.body;

  const category = await editCategoryService(data, req.params.id);
  res.status(201).json(category);
};

export default editCategoryController;
