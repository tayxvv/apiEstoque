import { Connection } from "../../../../shared/infra/database/Connection";
import { TipoCategoria } from "../entities/TipoCategoria";
import { ITipoCategoriaRepository } from "../../repositories/ITipoCategoriaRepository";

class TipoCategoriaRepository implements ITipoCategoriaRepository {
  connection: any;
  static instance: any;

  constructor() {
    if (!TipoCategoriaRepository.instance) {
      TipoCategoriaRepository.instance = this;
      this.connection = new Connection();
    }

    return TipoCategoriaRepository.instance;
  }

  async selectAll(): Promise<TipoCategoria[]> {
    const tiposCategorias = await this.connection.query(
      "SELECT * FROM tipo_categoria"
    );
    return tiposCategorias;
  }
}

export { TipoCategoriaRepository };
