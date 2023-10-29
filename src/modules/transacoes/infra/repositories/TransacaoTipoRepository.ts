import { IDatabase } from "pg-promise";
import { Connection } from "../../../../shared/infra/database/Connection";
import { ITransacaoTipoRepository } from "../../repositories/ITransacaoTipoRepository";
import { TransacaoTipo } from "../entities/TransacaoTipo";

class TransacaoTipoRepository implements ITransacaoTipoRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }
  async selectAll(): Promise<TransacaoTipo[]> {
    const tiposTransacoes = await this.connection.query(
      "SELECT * FROM tipo_transacao"
    );
    return tiposTransacoes;
  }
}

export { TransacaoTipoRepository };
