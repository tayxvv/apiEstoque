import { Router } from "express";

import { Request, Response } from "express";
import { CreateMovimentacaoController } from "../../../../modules/usuario/useCase/createMovimentacao/CreateMovimentacaoController";
import { authMiddleware } from "../middleware/authMiddleware";
import { UpdateMovimentacaoController } from "../../../../modules/usuario/useCase/updateMovimentacao/UpdateMovimentacaoController";
import { ListMovimentacaoController } from "../../../../modules/usuario/useCase/listMovimentacao/ListMovimentacaoController";
const movimentacoesRoutes = Router();
const createMovimentacaoController = new CreateMovimentacaoController();
const updateMovimentacaoController = new UpdateMovimentacaoController();
const listMovimentacaoController = new ListMovimentacaoController();

movimentacoesRoutes.post("/", authMiddleware, createMovimentacaoController.handle);
movimentacoesRoutes.put("/:id", authMiddleware, updateMovimentacaoController.handle);
movimentacoesRoutes.get("/", authMiddleware, listMovimentacaoController.handle);

export { movimentacoesRoutes };
