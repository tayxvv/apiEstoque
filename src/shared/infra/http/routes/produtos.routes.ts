import { Router } from "express";

import { Request, Response } from "express";
import { CreateProdutoController } from "../../../../modules/usuario/useCase/createProduto/CreateProdutoController";
import { ListProdutoController } from "../../../../modules/usuario/useCase/listProdutos/ListProdutoController";

const produtosRoutes = Router();
const createProdutoController = new CreateProdutoController();
const listProdutosController = new ListProdutoController();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Acesso não autorizado' });
    }
    next();
};

produtosRoutes.post("/", authMiddleware, createProdutoController.handle);
produtosRoutes.get("/", authMiddleware, listProdutosController.handle);

export { produtosRoutes };
