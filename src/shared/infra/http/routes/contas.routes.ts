import { Router } from "express";

import { Request, Response } from "express";
import { CreateContaBancariaController } from "../../../../modules/contasBancarias/useCase/createContaBancaria/CreateContaBancariaController";

const contaBancariaRoutes = Router();
const createContaBancariaController = new CreateContaBancariaController();

contaBancariaRoutes.post("/", createContaBancariaController.handle);

export { contaBancariaRoutes };
