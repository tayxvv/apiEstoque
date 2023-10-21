import { Router } from "express";
import { homeRoutes } from "./home.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";
import { contaBancariaRoutes } from "./contas.routes";
import { transferenciaRoutes } from "./transferencia.routes";

const router = Router();

router.use("/home", homeRoutes);
router.use("/registerLogin", usersRoutes);
router.use("/login", authenticateRoutes);
router.use("/conta", contaBancariaRoutes);
router.use("/transferencia", transferenciaRoutes);

export { router };
