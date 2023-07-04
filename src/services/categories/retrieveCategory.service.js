import database from "../../database/index.js";
import { listCategoriesSerializer } from "../../serializers/categories.Serializers.js";

const retrieveCategoryService = async (category) => {
  const retrieveCategory = await database.query(
    `
  SELECT id, name

  FROM categories

  WHERE categories.id = $1;`,
    [category]
  );

  const validatedCategory = await listCategoriesSerializer.validate(
    retrieveCategory.rows
  );

  return validatedCategory;
};

export default retrieveCategoryService;
