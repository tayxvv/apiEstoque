import { Router } from "express";

import { Request, Response } from "express";
import { CreateUserController } from "../../../../modules/usuario/useCase/createUser/CreateUserController";
import { ListUserController } from "../../../../modules/usuario/useCase/listUsers/ListUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);

export { usersRoutes };
