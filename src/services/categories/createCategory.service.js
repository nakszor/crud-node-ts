import database from "../../database/index.js";
import {
  categoryResponseSerializer,
  createCategorySerializer,
} from "../../serializers/categories.Serializers.js";

const createCategoryService = async (data) => {
  const verifyCategory = await database.query(
    `SELECT *

    FROM   
    
    categories 
       
    WHERE name = $1
     `,
    [data.name]
  );

  if (verifyCategory.rowCount !== 0) {
    return [
      403,
      {
        message: "category already exists",
      },
    ];
  }
  const queryResponse = await database.query(
    `INSERT INTO
            categories (name)
        VALUES
            ($1)
        RETURNING *;`,
    [data.name]
  );

  const returnedCategory = await categoryResponseSerializer.validate(
    queryResponse.rows[0]
  );
  console.log(returnedCategory);
  return [201, returnedCategory];
};

export default createCategoryService;
