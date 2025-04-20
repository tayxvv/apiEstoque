import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";
import { produtosRoutes } from "./produtos.routes";
import { categoriasRoutes } from "./categorias.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);
router.use("/produtos", produtosRoutes);
router.use("/categorias", categoriasRoutes);

export { router };
