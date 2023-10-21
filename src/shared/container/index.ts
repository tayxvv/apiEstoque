import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";
import { IContasBancariasRepository } from "../../modules/contasBancarias/repositories/IContasBancariasRepository";
import { ContasBancariasRepository } from "../../modules/contasBancarias/infra/repositories/ContasBancariasRepository";
import { ITransacaoFinanceiraRepository } from "../../modules/transacoes/repositories/ITransacaoFinanceiraRepository";
import { TransacaoFinanceiraRepository } from "../../modules/transacoes/infra/repositories/TransacaoFinanceiraRepository";

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
