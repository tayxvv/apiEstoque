import { Router } from "express";

import { Request, Response } from "express";
import { ListTipoCategoriaController } from "../../../../modules/categorias/useCase/listTipoCategoria/ListTipoCategoriaController";

const categoriasRoutes = Router();
const listTipoCategoriaController = new ListTipoCategoriaController();
categoriasRoutes.get("/", listTipoCategoriaController.handle);

export { categoriasRoutes };
