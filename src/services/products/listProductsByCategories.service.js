import database from "../../database/index.js";
import { listProductsSerializer } from "../../serializers/products.Serializers.js";

const listProductsByCategoryService = async (categoryId) => {
  const verifyCategory = await database.query(
    `SELECT *
    
        FROM   
        
        categories 
           
        WHERE id = $1
         `,
    [categoryId]
  );

  if (verifyCategory.rowCount == 0) {
    return [
      403,
      {
        message: "this category does not exists",
      },
    ];
  }
  const products = await database.query(
    `
    SELECT * 
    FROM products
    JOIN categories  ON categories.id = products.category_id 
    WHERE categories.id = $1
    `,
    [categoryId]
  );

  const validatedProducts = await listProductsSerializer.validate(
    products.rows
  );

  return [200, validatedProducts];
};

export default listProductsByCategoryService;
