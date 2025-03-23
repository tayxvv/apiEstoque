import { Response } from "express";
import { UsersRepository } from "../../infra/repositories/UsersRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Connection } from "../../../../shared/infra/database/Connection";
import { User } from "../../infra/entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

interface IResponse {
  username: string;
  password: string;
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  connection: Connection;

  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(username: string, password: string): Promise<String> {
    try {
      const user = await this.userRepository.findByUserName(username);
      console.log(user);

      if (!user) {
        throw new AppError("Nome de usuário ou senha incorretos", 401);
      }

      const passwordMatch = await compare(password, user.password_hash);

      if (!passwordMatch) {
        throw new AppError("E-mail ou senha incorretos", 401);
      }

      const userId = user.id_usuario;
      const token = sign({ userId }, auth.secret_token, { expiresIn: "1h" });

      return token;
    } catch (error) {
      throw error;
    }
  }
}

export { AuthenticateUserUseCase };
