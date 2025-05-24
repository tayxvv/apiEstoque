import { Router } from "express";

import { Request, Response } from "express";
import { ListTipoMovimentacaoController } from "../../../../modules/usuario/useCase/listTipoMovimentacao/ListTipoMovimentacaoController";
import { authMiddleware } from "../middleware/authMiddleware";
const tipoMovimentacaoRoutes = Router();
const listTipoMovimentacaoController = new ListTipoMovimentacaoController();

tipoMovimentacaoRoutes.get("/", authMiddleware, listTipoMovimentacaoController.handle);
export { tipoMovimentacaoRoutes };
