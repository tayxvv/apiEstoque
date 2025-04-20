import { Router } from "express";

import { Request, Response } from "express";
import { CreateProdutoController } from "../../../../modules/usuario/useCase/createProduto/CreateProdutoController";
import { ListProdutoController } from "../../../../modules/usuario/useCase/listProdutos/ListProdutoController";
import { authMiddleware } from "../middleware/authMiddleware";
import { UpdateProdutoController } from "../../../../modules/usuario/useCase/updateProduto/UpdateProdutoController";
import { DeleteProdutoController } from "../../../../modules/usuario/useCase/deleteProduto/UpdateProdutoController";
const produtosRoutes = Router();
const createProdutoController = new CreateProdutoController();
const listProdutosController = new ListProdutoController();
const updateProdutosController = new UpdateProdutoController();
const deleteProdutosController = new DeleteProdutoController();

produtosRoutes.post("/", authMiddleware, createProdutoController.handle);
produtosRoutes.get("/", authMiddleware, listProdutosController.handle);
produtosRoutes.put("/:id", authMiddleware, updateProdutosController.handle);
produtosRoutes.delete("/:id", authMiddleware, deleteProdutosController.handle);
// produtosRoutes.get("/", listProdutosController.handle);
// produtosRoutes.post("/", listProdutosController.handle);

export { produtosRoutes };
