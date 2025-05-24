import { Router } from "express";

import { Request, Response } from "express";
import { CreateMovimentacaoController } from "../../../../modules/usuario/useCase/createMovimentacao/CreateMovimentacaoController";
import { authMiddleware } from "../middleware/authMiddleware";
const movimentacoesRoutes = Router();
const createMovimentacaoController = new CreateMovimentacaoController();

movimentacoesRoutes.post("/", authMiddleware, createMovimentacaoController.handle);

export { movimentacoesRoutes };
