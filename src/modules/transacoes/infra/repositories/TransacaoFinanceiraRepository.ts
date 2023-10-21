import { IDatabase } from "pg-promise";
import { TransacaoFinanceira } from "../entities/TransacaoFinanceira";
import { ITransacaoFinanceiraRepository } from "../../repositories/ITransacaoFinanceiraRepository";
import { ICreateTransacaoFinanceiraDTO } from "../../dto/ICreateTransacaoFinanceiraDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class TransacaoFinanceiraRepository implements ITransacaoFinanceiraRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({
    valor,
    descricao,
    id_tipo_transacao,
    id_usuario,
    id_conta,
    id_tipo_categoria,
  }: ICreateTransacaoFinanceiraDTO): Promise<TransacaoFinanceira> {
    const transacaoFinanceira = new TransacaoFinanceira(
      valor,
      descricao,
      id_tipo_transacao,
      id_usuario,
      id_conta,
      id_tipo_categoria
    );

    await this.connection.query(
      "INSERT INTO transacao_financeira(valor,descricao,id_tipo_transacao,id_usuario,id_conta,id_tipo_categoria) VALUES(${valor},${descricao},${id_tipo_transacao},${id_usuario},${id_conta},${id_tipo_categoria})",
      {
        valor: transacaoFinanceira.valor,
        descricao: transacaoFinanceira.descricao,
        id_tipo_transacao: transacaoFinanceira.id_tipo_transacao,
        id_usuario: transacaoFinanceira.id_usuario,
        id_conta: transacaoFinanceira.id_conta,
        id_tipo_categoria: transacaoFinanceira.id_tipo_categoria,
      }
    );

    return transacaoFinanceira;
  }
}

export { TransacaoFinanceiraRepository };
