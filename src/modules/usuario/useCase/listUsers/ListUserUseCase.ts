import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../infra/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from "bcrypt";
@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const users = await this.userRepository.selectAll();
    return users;
  }
}
export { ListUserUseCase };
