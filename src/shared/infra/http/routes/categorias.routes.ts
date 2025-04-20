import { Router } from "express";

import { Request, Response } from "express";
import { ListCategoriaController } from "../../../../modules/usuario/useCase/listCategorias/ListCategoriaController";
import { authMiddleware } from "../middleware/authMiddleware";
const categoriasRoutes = Router();
const listCategoriasController = new ListCategoriaController();

categoriasRoutes.get("/", authMiddleware, listCategoriasController.handle);
export { categoriasRoutes };
