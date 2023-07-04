import createProductsController from "../controllers/products/createProducts.controller.js";
import listProductsController from "../controllers/products/listProducts.Controller.js";
import { Router } from "express";
import {
  editProductSerializer,
  productResponseSerializer,
} from "../serializers/products.Serializers.js";
import validateDataMiddleware from "../middlewares/validateData.middlewre.js";
import retrieveProductController from "../controllers/products/retrieveProducts.controller.js";
import editProductController from "../controllers/products/editProduct.controller.js";
import deleteProductController from "../controllers/products/deleteProducts.controller.js";
import listProductsByCategoryController from "../controllers/products/listProductsByCategory.controller.js";

const productsRoutes = Router();

productsRoutes.post(
  "",
  validateDataMiddleware(productResponseSerializer),
  createProductsController
);

productsRoutes.get("", listProductsController);

productsRoutes.get("/:id", retrieveProductController);

productsRoutes.patch(
  "/:id",
  validateDataMiddleware(editProductSerializer),
  editProductController
);

productsRoutes.delete("/:id", deleteProductController);

productsRoutes.get(
  "/categories/:category_id",
  listProductsByCategoryController
);

export default productsRoutes;
