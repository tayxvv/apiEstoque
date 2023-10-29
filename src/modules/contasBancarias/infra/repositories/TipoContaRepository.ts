import { Connection } from "../../../../shared/infra/database/Connection";
import { TipoConta } from "../entities/TipoConta";
import { ITipoContaRepository } from "../../repositories/ITipoContaRepository";

class TipoContaRepository implements ITipoContaRepository {
  connection: any;
  static instance: any;

  constructor() {
    if (!TipoContaRepository.instance) {
      TipoContaRepository.instance = this;
      this.connection = new Connection();
    }

    return TipoContaRepository.instance;
  }

  async selectAll(): Promise<TipoConta[]> {
    const tiposContas = await this.connection.query("SELECT * FROM tipo_conta");
    return tiposContas;
  }
}

export { TipoContaRepository };
