import { container } from "tsyringe";
import { IUserRepository } from "../../modules/usuario/repositories/IUserRepository";
import { UsersRepository } from "../../modules/usuario/infra/repositories/UsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
