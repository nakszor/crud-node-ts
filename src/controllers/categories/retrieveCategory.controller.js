import retrieveCategoryService from "../../services/categories/retrieveCategory.service.js";

const retrieveCategoryController = async (req, res) => {
  const category = await retrieveCategoryService(req.params.id);

  res.status(200).json(category);
};

export default retrieveCategoryController;
