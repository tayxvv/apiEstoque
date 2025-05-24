import { IDatabase } from "pg-promise";
import { Movimentacao } from "../entities/Movimentacao";
import { IMovimentacaoRepository } from "../../repositories/IMovimentacaoRepository";
import { ICreateMovimentacaoDTO } from "../../dto/ICreateMovimentacaoDTO";
import { Connection } from "../../../../shared/infra/database/Connection";
import { IUpdateMovimentacaoDTO } from "../../dto/IUpdateMovimentacaoDTO";

class MovimentacaoRepository implements IMovimentacaoRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({ observacao, quantidade, data, id_produto, id_tipo_movimentacao }: ICreateMovimentacaoDTO): Promise<Movimentacao> {
    const movimentacao = new Movimentacao(observacao, quantidade, data, id_produto, id_tipo_movimentacao);

    await this.connection.query(
      "INSERT INTO movimentacoes(observacao, quantidade, data, id_produto, id_tipo_movimentacao) VALUES(${observacao}, ${quantidade}, ${data}, ${id_produto}, ${id_tipo_movimentacao})",
      {
        observacao: movimentacao.observacao,
        quantidade: movimentacao.quantidade,
        data: movimentacao.data,
        id_produto: movimentacao.id_produto,
        id_tipo_movimentacao: movimentacao.id_tipo_movimentacao,
      }
    );

    return movimentacao;
  }

  async update(id: string, { observacao, quantidade, data, id_produto, id_tipo_movimentacao }: IUpdateMovimentacaoDTO): Promise<Movimentacao | null> {
    try {
      const result = await this.connection.query(
        "UPDATE movimentacoes SET observacao = $1, quantidade = $2, data = $3, id_produto = $4, id_tipo_movimentacao = $5 WHERE id = $6 RETURNING *",
        [
          observacao,
          quantidade,
          data,
          id_produto,
          id_tipo_movimentacao,
          id,
        ]
      );

      if (result.rows && result.rows.length > 0) {
        const updatedMovimentacao = new Movimentacao(
          result.rows[0].observacao,
          result.rows[0].quantidade,
          result.rows[0].data,
          result.rows[0].id_produto,
          result.rows[0].id_tipo_movimentacao
        );
        updatedMovimentacao.id = result.rows[0].id;
        return updatedMovimentacao;
      }

      return null;
    } catch (error) {
      console.error("Erro ao atualizar movimentação:", error);
      throw error;
    }
  }

  async findById(id: string): Promise<Movimentacao> {
    try {
      const movimentacoes = await this.connection.query(
        "SELECT * FROM movimentacoes WHERE id = ${id}",
        {
            id,
        }
      );

      return movimentacoes[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async selectAll(): Promise<Movimentacao[]> {
    const movimentacoes = await this.connection.query("SELECT * FROM movimentacoes");
    return movimentacoes;
  }
}

export { MovimentacaoRepository };
