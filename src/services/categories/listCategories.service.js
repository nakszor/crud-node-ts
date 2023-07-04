import database from "../../database/index.js";
import { listCategoriesSerializer } from "../../serializers/categories.Serializers.js";

const listCategoryService = async () => {
  const categories = await database.query(`
        SELECT
            *  
        FROM
            categories;
    `);

  const validatedCategories = await listCategoriesSerializer.validate(
    categories.rows
  );

  return [200, validatedCategories];
};

export default listCategoryService;
