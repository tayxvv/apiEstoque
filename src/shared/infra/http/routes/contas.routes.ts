import { Router } from "express";

import { Request, Response } from "express";
import { CreateContaBancariaController } from "../../../../modules/contasBancarias/useCase/createContaBancaria/CreateContaBancariaController";
import { ListContaBancariaController } from "../../../../modules/contasBancarias/useCase/listContaBancaria/ListContaBancariaController";
import { ListContaBancariaByIdController } from "../../../../modules/contasBancarias/useCase/listContaBancaria/ListContaBancariaByIdController";
import { UpdateContaBancariaController } from "../../../../modules/contasBancarias/useCase/updateContaBancaria/UpdateContaBancariaController";
import { DeleteContaBancariaController } from "../../../../modules/contasBancarias/useCase/deleteContaBancaria/DeleteContaBancariaController";

const contaBancariaRoutes = Router();
const createContaBancariaController = new CreateContaBancariaController();
const listContaBancariaController = new ListContaBancariaController();
const listContaBancariaByIdController = new ListContaBancariaByIdController();
const updateContaBancariaController = new UpdateContaBancariaController();
const deleteContaBancariaController = new DeleteContaBancariaController();

contaBancariaRoutes.post("/", createContaBancariaController.handle);
contaBancariaRoutes.get("/", listContaBancariaController.handle);
contaBancariaRoutes.get("/:id", listContaBancariaByIdController.handle);
contaBancariaRoutes.put("/:id", updateContaBancariaController.handle);
contaBancariaRoutes.delete("/:id", deleteContaBancariaController.handle);

export { contaBancariaRoutes };
