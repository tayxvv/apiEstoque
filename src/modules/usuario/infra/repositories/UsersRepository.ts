import { IDatabase } from "pg-promise";
import { User } from "../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class UsersRepository implements IUserRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({ username, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User(username, email, password);

    await this.connection.query(
      "INSERT INTO usuario(username, email, password_hash) VALUES(${username}, ${email}, ${password_hash})",
      {
        username: user.username,
        email: user.email,
        password_hash: user.password_hash,
      }
    );

    return user;
  }

  async findByUserName(username: string): Promise<User> {
    try {
      const user = await this.connection.query(
        "SELECT * FROM usuario WHERE username = ${username}",
        {
          username,
        }
      );

      return user[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async selectAll(): Promise<User[]> {
    const usuarios = await this.connection.query("SELECT * FROM usuario");
    return usuarios;
  }
}

export { UsersRepository };
