import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRotues = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRotues.use(ensureAuthenticated);
specificationRotues.post("/", createSpecificationController.handle);

export { specificationRotues };
