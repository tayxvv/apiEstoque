import { Router } from "express";

import { Request, Response } from "express";
import { CreateTransferenciaController } from "../../../../modules/transacoes/useCase/createTransferencia/CreateTransferenciaController";

const transferenciaRoutes = Router();
const transferenciaController = new CreateTransferenciaController();

transferenciaRoutes.post("/", transferenciaController.handle);

export { transferenciaRoutes };
