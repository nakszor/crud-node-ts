import retrieveProductService from "../../services/products/retrieveProducts.service.js";

const retrieveProductController = async (req, res) => {
  const category = await retrieveProductService(req.params.id);

  res.status(200).json(category);
};

export default retrieveProductController;
