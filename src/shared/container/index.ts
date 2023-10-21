import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";
import { IContasBancariasRepository } from "../../modules/contasBancarias/repositories/IContasBancariasRepository";
import { ContasBancariasRepository } from "../../modules/contasBancarias/infra/repositories/ContasBancariasRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IContasBancariasRepository>(
  "ContasBancariasRepository",
  ContasBancariasRepository
);
