import { Router } from "express";

import { Request, Response } from "express";
import { AuthenticateUserController } from "../../../../modules/usuario/useCase/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/", authenticateUserController.handle);

export { authenticateRoutes };
