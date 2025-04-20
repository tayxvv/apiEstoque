import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";
import { IProdutoRepository } from "../../modules/usuario/repositories/IProdutoRepository";
import { ProdutoRepository } from "../../modules/usuario/infra/repositories/ProdutoRepository";
import { ICategoriaRepository } from "../../modules/usuario/repositories/ICategoriaRepository";
import { CategoriaRepository } from "../../modules/usuario/infra/repositories/CategoriaRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProdutoRepository>(
  "ProdutoRepository",
  ProdutoRepository
);

container.registerSingleton<ICategoriaRepository>(
  "CategoriaRepository",
  CategoriaRepository
);

