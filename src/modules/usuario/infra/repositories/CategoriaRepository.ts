import { IDatabase } from "pg-promise";
import { Categoria } from "../entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";
import { Connection } from "../../../../shared/infra/database/Connection";

class CategoriaRepository implements ICategoriaRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }
  async selectAll(): Promise<Categoria[]> {
    const categorias = await this.connection.query("SELECT * FROM categoria");
    return categorias;
  }
}

export { CategoriaRepository };
