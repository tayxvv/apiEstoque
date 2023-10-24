import { Router } from "express";

import { Request, Response } from "express";
import { CreateContaBancariaController } from "../../../../modules/contasBancarias/useCase/createContaBancaria/CreateContaBancariaController";
import { ListContaBancariaController } from "../../../../modules/contasBancarias/useCase/listContaBancaria/ListContaBancariaController";
import { ListContaBancariaByIdController } from "../../../../modules/contasBancarias/useCase/listContaBancaria/ListContaBancariaByIdController";

const contaBancariaRoutes = Router();
const createContaBancariaController = new CreateContaBancariaController();
const listContaBancariaController = new ListContaBancariaController();
const listContaBancariaByIdController = new ListContaBancariaByIdController();

contaBancariaRoutes.post("/", createContaBancariaController.handle);
contaBancariaRoutes.get("/", listContaBancariaController.handle);
contaBancariaRoutes.get("/:id", listContaBancariaByIdController.handle);

export { contaBancariaRoutes };
