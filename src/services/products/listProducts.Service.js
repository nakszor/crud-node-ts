import database from "../../database/index.js";
import { listProductsSerializer } from "../../serializers/products.Serializers.js";

const listProductsService = async () => {
  const products = await database.query(`
        SELECT
            *  
        FROM
            products;
    `);

  const validatedProducts = await listProductsSerializer.validate(
    products.rows
  );

  return validatedProducts;
};

export default listProductsService;
