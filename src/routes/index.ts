import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRotues } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRotues);
router.use("/users", usersRoutes);

export { router };
