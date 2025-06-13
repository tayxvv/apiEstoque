import { Fornecedor } from "../entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { IUpdateFornecedorDTO } from "../../dto/IUpdateFornecedorDTO";
import { ICreateFornecedorRawDTO } from "../../dto/ICreateFornecedorRawDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class FornecedorRepository implements IFornecedorRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({ nome, email, id_telefone, id_endereco }: ICreateFornecedorRawDTO): Promise<Fornecedor> {
    const result = await this.connection.query(
      `INSERT INTO fornecedores (nome, email, id_telefone, id_endereco)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nome, email, id_telefone, id_endereco]
    );

    const row = result.rows[0];
    const fornecedor = new Fornecedor(row.nome, row.email, row.id_telefone, row.id_endereco);
    fornecedor.id = row.id;
    return fornecedor;
  }

  async update(id: string, { nome, email, telefone, endereco }: IUpdateFornecedorDTO): Promise<Fornecedor | null> {
    const result = await this.connection.query(
      `UPDATE fornecedores 
       SET nome = $1, email = $2, id_telefone = $3, id_endereco = $4 
       WHERE id = $5 
       RETURNING *`,
      [nome, email, telefone, endereco, id] // Aqui telefone e endereco devem ser os IDs
    );

    if (result.rows && result.rows.length > 0) {
      const updated = result.rows[0];
      const fornecedor = new Fornecedor(
        updated.nome,
        updated.email,
        updated.id_telefone,
        updated.id_endereco
      );
      fornecedor.id = updated.id;
      return fornecedor;
    }

    return null;
  }

  async findById(id: string): Promise<Fornecedor | null> {
    const result = await this.connection.query(
      `SELECT * FROM fornecedores WHERE id = $1`,
      [id]
    );

    return result.rows?.[0] || null;
  }

  async findByName(nome: string): Promise<Fornecedor | null> {
    const result = await this.connection.query(
      `SELECT * FROM fornecedores WHERE nome = $1`,
      [nome]
    );

    return result.rows?.[0] || null;
  }

  async selectAll(): Promise<Fornecedor[]> {
    const result = await this.connection.query(`SELECT * FROM fornecedores`);
    return result.rows;
  }

  async delete(id: string): Promise<void> {
    await this.connection.query(
      `DELETE FROM fornecedores WHERE id = $1`,
      [id]
    );
  }
}

export { FornecedorRepository };