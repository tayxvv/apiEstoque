import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

import { CreateFornecedorController } from "../../../../modules/usuario/useCase/createFornecedor/CreateFornecedorController";
import { UpdateFornecedorController } from "../../../../modules/usuario/useCase/updateFornecedor/UpdateFornecedorController";
import { ListFornecedorController } from "../../../../modules/usuario/useCase/listFornecedor/ListFornecedorController";

const fornecedoresRoutes = Router();

const createFornecedorController = new CreateFornecedorController();
const updateFornecedorController = new UpdateFornecedorController();
const listFornecedorController = new ListFornecedorController();

fornecedoresRoutes.post("/", authMiddleware, createFornecedorController.handle);
fornecedoresRoutes.put("/:id", authMiddleware, updateFornecedorController.handle);
fornecedoresRoutes.get("/", authMiddleware, listFornecedorController.handle);

export { fornecedoresRoutes };