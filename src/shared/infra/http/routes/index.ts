import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticateUser.routes";
import { produtosRoutes } from "./produtos.routes";
import { categoriasRoutes } from "./categorias.routes";
import { tipoMovimentacaoRoutes } from "./tipomovimentacao.routes";
import { movimentacoesRoutes } from "./movimentacao.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/login", authenticateRoutes);
router.use("/produtos", produtosRoutes);
router.use("/categorias", categoriasRoutes);
router.use("/tipo-movimentacao", tipoMovimentacaoRoutes);
router.use("/movimentacao", movimentacoesRoutes);

export { router };
