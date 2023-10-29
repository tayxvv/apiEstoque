import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";
import { IContasBancariasRepository } from "../../modules/contasBancarias/repositories/IContasBancariasRepository";
import { ContasBancariasRepository } from "../../modules/contasBancarias/infra/repositories/ContasBancariasRepository";
import { ITransacaoFinanceiraRepository } from "../../modules/transacoes/repositories/ITransacaoFinanceiraRepository";
import { TransacaoFinanceiraRepository } from "../../modules/transacoes/infra/repositories/TransacaoFinanceiraRepository";
import { ITipoContaRepository } from "../../modules/contasBancarias/repositories/ITipoContaRepository";
import { TipoContaRepository } from "../../modules/contasBancarias/infra/repositories/TipoContaRepository";
import { ITipoCategoriaRepository } from "../../modules/categorias/repositories/ITipoCategoriaRepository";
import { TipoCategoriaRepository } from "../../modules/categorias/infra/repositories/TipoCategoriaRepository";
import { ITransacaoTipoRepository } from "../../modules/transacoes/repositories/ITransacaoTipoRepository";
import { TransacaoTipoRepository } from "../../modules/transacoes/infra/repositories/TransacaoTipoRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IContasBancariasRepository>(
  "ContasBancariasRepository",
  ContasBancariasRepository
);

container.registerSingleton<ITransacaoFinanceiraRepository>(
  "TransacaoFinanceiraRepository",
  TransacaoFinanceiraRepository
);

container.registerSingleton<ITipoContaRepository>(
  "TipoContaRepository",
  TipoContaRepository
);

container.registerSingleton<ITipoCategoriaRepository>(
  "TipoCategoriaRepository",
  TipoCategoriaRepository
);

container.registerSingleton<ITransacaoTipoRepository>(
  "TransacaoTipoRepository",
  TransacaoTipoRepository
);
