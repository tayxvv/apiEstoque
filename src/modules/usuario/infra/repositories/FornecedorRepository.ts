import { Fornecedor } from "../entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { ICreateFornecedorDTO } from "../../dto/ICreateFornecedorDTO";
import { IUpdateFornecedorDTO } from "../../dto/IUpdateFornecedorDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class FornecedorRepository implements IFornecedorRepository {
  private connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create(data: ICreateFornecedorDTO): Promise<Fornecedor> {
    const result = await this.connection.query(
      `INSERT INTO fornecedores (nome, email, id_endereco, id_telefone)
       VALUES (${data.nome}, ${data.email}, ${data.endereco}, ${data.telefone})
       RETURNING *`
    );

    return result[0];
  }

  async update(id: number, data: IUpdateFornecedorDTO): Promise<Fornecedor> {
    const result = await this.connection.query(
      `UPDATE fornecedores SET nome = $1, email = $2 WHERE id = $3 RETURNING *`,
      [data.nome, data.email, id]
    );

    return result.rows[0];
  }

  async findById(id: number): Promise<Fornecedor | null> {
    const result = await this.connection.query(
      `SELECT * FROM fornecedores WHERE id = ${id}`
    );

    return result.length > 0 ? result[0] : null;
  }

  async delete(id: number): Promise<void> {
    await this.connection.query(
      `DELETE FROM fornecedores WHERE id = ${id}`
    );
  }

  async findByName(nome: string): Promise<Fornecedor | null> {
    const result = await this.connection.query(
      `SELECT * FROM fornecedores WHERE nome = ${nome}`
    );

    return result.length > 0 ? result[0] : null;
  }
}

export { FornecedorRepository };