import database from "../../database/index.js";
import {
  listProductsSerializer,
  productResponseSerializer,
} from "../../serializers/products.Serializers.js";

const retrieveProductService = async (productId) => {
  const retrieveProduct = await database.query(
    `
  SELECT *

  FROM products

  WHERE products.id = $1;`,
    [productId]
  );

  const validatedProduct = await productResponseSerializer.validate(
    retrieveProduct.rows[0]
  );

  return validatedProduct;
};

export default retrieveProductService;
