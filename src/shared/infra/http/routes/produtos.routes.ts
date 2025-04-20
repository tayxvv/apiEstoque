import { Router } from "express";

import { Request, Response } from "express";
import { CreateProdutoController } from "../../../../modules/usuario/useCase/createProduto/CreateProdutoController";
import { ListProdutoController } from "../../../../modules/usuario/useCase/listProdutos/ListProdutoController";
import { authMiddleware } from "../middleware/authMiddleware";
const produtosRoutes = Router();
const createProdutoController = new CreateProdutoController();
const listProdutosController = new ListProdutoController();

produtosRoutes.post("/", authMiddleware, createProdutoController.handle);
produtosRoutes.get("/", authMiddleware, listProdutosController.handle);
// produtosRoutes.get("/", listProdutosController.handle);
// produtosRoutes.post("/", listProdutosController.handle);

export { produtosRoutes };
