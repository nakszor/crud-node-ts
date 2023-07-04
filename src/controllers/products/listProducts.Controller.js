import listProductsService from "../../services/products/listProducts.Service.js";

const listProductsController = async (req, res) => {
  const data = await listProductsService();
  const name = data.map((elem) => elem.name);
  return res.status(200).json(name);
};

export default listProductsController;
