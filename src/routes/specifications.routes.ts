import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRotues = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRotues.post("/", createSpecificationController.handle);

export { specificationRotues };
