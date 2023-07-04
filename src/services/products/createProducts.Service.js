import database from "../../database/index.js";
import { productResponseSerializer } from "../../serializers/products.Serializers.js";

const createProductsService = async (productData) => {
  const findCategory = await database.query(
    ` SELECT 
        * 
            FROM 
                categories
            WHERE
                id = $1;`,
    [productData.category_id]
  );

  if (!findCategory.rowCount > 0) {
    throw new AppError("Category not found", 404);
  }

  const queryResponse = await database.query(
    `INSERT INTO 
 
        products(name, price, category_id)

    VALUES 

    ($1,$2,$3) RETURNING *;`,

    [productData.name, productData.price, productData.category_id]
  );

  const returnedProduct = await productResponseSerializer.validate(
    queryResponse.rows[0],
    {
      stripUnknown: true,
    }
  );

  return [201, returnedProduct];
};

export default createProductsService;
