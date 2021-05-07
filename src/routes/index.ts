import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRotues } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRotues);

export { router };
