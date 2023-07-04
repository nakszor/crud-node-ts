import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller.js";
import deleteCategorycontroller from "../controllers/categories/deleteCategory.controller.js";
import editCategoryController from "../controllers/categories/editCategory.controller.js";
import listCategoryController from "../controllers/categories/listCategories.controller.js";
import retrieveCategoryController from "../controllers/categories/retrieveCategory.controller.js";
import validateDataMiddleware from "../middlewares/validateData.middlewre.js";
import { createCategorySerializer } from "../serializers/categories.Serializers.js";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoryController);

categoriesRoutes.post(
  "",
  validateDataMiddleware(createCategorySerializer),
  createCategoryController
);

categoriesRoutes.get("/:id", retrieveCategoryController);

categoriesRoutes.patch(
  "/:id",
  validateDataMiddleware(createCategorySerializer),
  editCategoryController
);

categoriesRoutes.delete("/:id", deleteCategorycontroller);

export default categoriesRoutes;
