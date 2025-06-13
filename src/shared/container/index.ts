import { container } from "tsyringe";

import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";

import { IProdutoRepository } from "../../modules/usuario/repositories/IProdutoRepository";
import { ProdutoRepository } from "../../modules/usuario/infra/repositories/ProdutoRepository";

import { ICategoriaRepository } from "../../modules/usuario/repositories/ICategoriaRepository";
import { CategoriaRepository } from "../../modules/usuario/infra/repositories/CategoriaRepository";

import { ITipoMovimentacaoRepository } from "../../modules/usuario/repositories/ITipoMovimentacaoRepository";
import { TipoMovimentacaoRepository } from "../../modules/usuario/infra/repositories/TipoMovimentacaoRepository";

import { IMovimentacaoRepository } from "../../modules/usuario/repositories/IMovimentacaoRepository";
import { MovimentacaoRepository } from "../../modules/usuario/infra/repositories/MovimentacaoRepository";

import { IFornecedorRepository } from "../../modules/usuario/repositories/IFornecedorRepository";
import { FornecedorRepository } from "../../modules/usuario/infra/repositories/FornecedorRepository";

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

container.registerSingleton<ITipoMovimentacaoRepository>(
  "TipoMovimentacaoRepository",
  TipoMovimentacaoRepository
);

container.registerSingleton<IMovimentacaoRepository>(
  "MovimentacaoRepository",
  MovimentacaoRepository
);

container.registerSingleton<IFornecedorRepository>(
  "FornecedorRepository",
  FornecedorRepository
);