import { IDatabase } from "pg-promise";
import { TipoMovimentacao } from "../entities/TipoMovimentacao";
import { ITipoMovimentacaoRepository } from "../../repositories/ITipoMovimentacaoRepository";
import { Connection } from "../../../../shared/infra/database/Connection";

class TipoMovimentacaoRepository implements ITipoMovimentacaoRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }
  async selectAll(): Promise<TipoMovimentacao[]> {
    const tiposMovimentacoes = await this.connection.query("SELECT * FROM tipo_movimentacao");
    return tiposMovimentacoes;
  }
}

export { TipoMovimentacaoRepository };
