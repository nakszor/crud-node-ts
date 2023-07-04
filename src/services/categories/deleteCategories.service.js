import database from "../../database/index.js";

const deleteCategoryService = async (categoryId) => {
  const verifyCategory = await database.query(
    `SELECT *

    FROM   
    
    categories 
       
    WHERE id = $1
     `,
    [categoryId]
  );

  if (verifyCategory.rowCount === 0) {
    throw new AppError("This category does not exists!");
  }
  await database.query(
    `DELETE  

    FROM 

    categories 

    WHERE 
    id = $1
    `,
    [categoryId]
  );
  return [204, {}];
};

export default deleteCategoryService;
