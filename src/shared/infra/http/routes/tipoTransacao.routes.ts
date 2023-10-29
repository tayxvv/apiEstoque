import { Router } from "express";

import { Request, Response } from "express";
import { ListTipoTransferenciaController } from "../../../../modules/transacoes/useCase/listTipoTransferencia/ListTipoTransferenciaController";

const tipoTransacaoRoutes = Router();
const listTipoTransacaoController = new ListTipoTransferenciaController();
tipoTransacaoRoutes.get("/", listTipoTransacaoController.handle);

export { tipoTransacaoRoutes };
