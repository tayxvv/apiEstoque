import { Router } from "express";

import { Request, Response } from "express";
import { CreateContaBancariaController } from "../../../../modules/contasBancarias/useCase/createContaBancaria/CreateContaBancariaController";
import { ListContaBancariaController } from "../../../../modules/contasBancarias/useCase/listContaBancaria/ListContaBancariaController";

const contaBancariaRoutes = Router();
const createContaBancariaController = new CreateContaBancariaController();
const listContaBancariaController = new ListContaBancariaController();

contaBancariaRoutes.post("/", createContaBancariaController.handle);
contaBancariaRoutes.get("/", listContaBancariaController.handle);

export { contaBancariaRoutes };
