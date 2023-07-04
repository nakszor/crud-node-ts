import express from "express";
import categoriesRoutes from "./routers/categories.routes.js";
import productsRoutes from "./routers/products.routes.js";

const app = express();

app.use(express.json());

app.use("/products", productsRoutes);

app.use("/categories", categoriesRoutes);

export default app;
