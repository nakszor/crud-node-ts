import deleteProductService from "../../services/products/deleteProduct.service.js";

const deleteProductController = async (req, res) => {
  const data = await deleteProductService(req.params.id);
  res.status(204).json(data);
};
export default deleteProductController;
