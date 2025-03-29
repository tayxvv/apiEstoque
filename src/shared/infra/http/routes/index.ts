import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";
import { produtosRoutes } from "./produtos.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);
router.use("/produtos", produtosRoutes);

export { router };
