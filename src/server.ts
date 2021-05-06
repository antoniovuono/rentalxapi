import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRotues } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRotues);

app.listen(3333, () => console.log("Server is running on port 3333 !"));
