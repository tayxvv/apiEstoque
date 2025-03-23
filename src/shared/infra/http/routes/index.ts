import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);

export { router };
