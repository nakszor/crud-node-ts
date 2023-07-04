import database from "../../database/index.js";

const deleteProductService = async (productId) => {
  const verifyProduct = await database.query(
    `SELECT *

    FROM   
    
    products 
       
    WHERE id = $1
     `,
    [productId]
  );

  if (verifyProduct.rowCount == 0) {
    throw new AppError("This product does not exists!");
  }
  await database.query(
    `DELETE  

    FROM 

    products 

    WHERE 
    id = $1
    `,
    [productId]
  );
};

export default deleteProductService;
