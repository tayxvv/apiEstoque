import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";
import { IProdutoRepository } from "../../modules/usuario/repositories/IProdutoRepository";
import { ProdutoRepository } from "../../modules/usuario/infra/repositories/ProdutoRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProdutoRepository>(
  "ProdutoRepository",
  ProdutoRepository
);
