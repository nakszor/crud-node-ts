import app from "./app.js";
import { startDatabase } from "./database/index.js";
import "dotenv/config";

export default app.listen(7000, () => {
  startDatabase();
  console.log("Server running");
});
