import editProductService from "../../services/products/editProduct.service.js";

const editProductController = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const category = await editProductService(data, id);
  res.status(201).json(category);
};

export default editProductController;
