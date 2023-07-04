import database from "../../database/index.js";
import { productResponseSerializer } from "../../serializers/products.Serializers.js";

const editProductService = async (productData, productId) => {
  let query = "UPDATE products set ";
  const keys = Object.keys(productData);
  const values = Object.values(productData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`;

  const queryResponse = await database.query(query, [...values, productId]);

  const editedProduct = await productResponseSerializer.validate(
    queryResponse.rows[0]
  );
  return editedProduct;
};

export default editProductService;
