import { Fornecedor } from "../entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { ICreateFornecedorDTO } from "../../dto/ICreateFornecedorDTO";
import { IUpdateFornecedorDTO } from "../../dto/IUpdateFornecedorDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class FornecedorRepository implements IFornecedorRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({
    nome,
    email,
    telefone,
    rua,
    bairro,
    quadra,
    numero
  }: ICreateFornecedorDTO): Promise<Fornecedor> {
    const fornecedor = new Fornecedor(nome, email, telefone, rua, bairro, numero, quadra);

    await this.connection.query(
      `
      INSERT INTO fornecedores 
        (nome, email, telefone, rua, bairro, quadra, numero, bo_ativo)
      VALUES 
        (\${nome}, \${email}, \${telefone}, \${rua}, \${bairro}, \${quadra}, \${numero}, true)
      `,
      {
        nome: fornecedor.nome,
        email: fornecedor.email,
        telefone: fornecedor.telefone,
        rua: fornecedor.rua,
        bairro: fornecedor.bairro,
        quadra: fornecedor.quadra,
        numero: fornecedor.numero
      }
    );

    return fornecedor;
  }

  async update(id: string, {
    nome,
    email,
    telefone,
    rua,
    bairro,
    quadra,
    numero
  }: IUpdateFornecedorDTO): Promise<Fornecedor | null> {
    try {
      const result = await this.connection.query(
        `UPDATE fornecedores 
         SET nome = $1, email = $2, telefone = $3, rua = $4, bairro = $5, quadra = $6, numero = $7
         WHERE id = $8 RETURNING *`,
        [nome, email, telefone, rua, bairro, quadra, numero, id]
      );

      if (result.rows && result.rows.length > 0) {
        const row = result.rows[0];
        const fornecedorAtualizado = new Fornecedor(
          row.nome,
          row.email,
          row.telefone,
          row.rua,
          row.bairro,
          row.numero,
          row.quadra
        );
        fornecedorAtualizado.id = row.id;
        return fornecedorAtualizado;
      }

      return null;
    } catch (error) {
      console.error("Erro ao atualizar fornecedor:", error);
      throw error;
    }
  }

  async findById(id: string): Promise<Fornecedor | null> {
    try {
      const fornecedor = await this.connection.query(
        "SELECT * FROM fornecedores WHERE id = ${id} AND bo_ativo = true",
        { id }
      );

      return fornecedor[0] || null;
    } catch (error) {
      console.error("Erro ao buscar fornecedor por ID:", error);
      throw error;
    }
  }

  async findByName(nome: string): Promise<Fornecedor | null> {
    try {
      const fornecedor = await this.connection.query(
        "SELECT * FROM fornecedores WHERE nome = ${nome} AND bo_ativo = true",
        { nome }
      );

      return fornecedor[0] || null;
    } catch (error) {
      console.error("Erro ao buscar fornecedor por nome:", error);
      throw error;
    }
  }

  async selectAll(): Promise<Fornecedor[]> {
    try {
      const fornecedores = await this.connection.query(
        "SELECT * FROM fornecedores WHERE bo_ativo = true"
      );

      return fornecedores.map((row: any) => {
        const fornecedor = new Fornecedor(
          row.nome,
          row.email,
          row.telefone,
          row.rua,
          row.bairro,
          row.numero,
          row.quadra
        );
        fornecedor.id = row.id;
        return fornecedor;
      });
    } catch (error) {
      console.error("Erro ao listar fornecedores:", error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.connection.query(
        "UPDATE fornecedores SET bo_ativo = false WHERE id = ${id}",
        { id }
      );
    } catch (error) {
      console.error("Erro ao inativar fornecedor:", error);
      throw error;
    }
  }
}

export { FornecedorRepository };