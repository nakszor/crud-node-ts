import database from "../../database/index.js";
import { categoryResponseSerializer } from "../../serializers/categories.Serializers.js";

const editCategoryService = async (categoryData, categoryId) => {
  let query = "UPDATE categories set ";
  const keys = Object.keys(categoryData);
  const values = Object.values(categoryData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`;

  const queryResponse = await database.query(query, [...values, categoryId]);

  const editedCategory = await categoryResponseSerializer.validate(
    queryResponse.rows[0]
  );
  return editedCategory;
};

export default editCategoryService;
