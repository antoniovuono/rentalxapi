import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRotues = Router();

specificationRotues.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRotues };
