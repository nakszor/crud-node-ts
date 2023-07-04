import createProductsService from "../../services/products/createProducts.Service.js";

const createProductsController = async (req, res) => {
  const [status, data] = await createProductsService(req.body);
  return res.status(status).json(data);
};

export default createProductsController;
