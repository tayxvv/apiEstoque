import { Router } from "express";

import { Request, Response } from "express";
import { ListTipoContaController } from "../../../../modules/contasBancarias/useCase/listTipoConta/ListTipoContaController";

const contasTiposRoutes = Router();
const listTipoContaController = new ListTipoContaController();

contasTiposRoutes.get("/", listTipoContaController.handle);

export { contasTiposRoutes };
