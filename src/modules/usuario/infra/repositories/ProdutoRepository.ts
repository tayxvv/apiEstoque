import { IDatabase } from "pg-promise";
import { Produto } from "../entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
import { ICreateProdutoDTO } from "../../dto/ICreateProdutoDTO";
import { Connection } from "../../../../shared/infra/database/Connection";
import { IUpdateProdutoDTO } from "../../dto/IUpdateProdutoDTO";

class ProdutoRepository implements IProdutoRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({ nome_produto, descricao, preco, quantidade_fornecedor, id_categoria }: ICreateProdutoDTO): Promise<Produto> {
    const produto = new Produto(nome_produto, descricao, preco, quantidade_fornecedor, id_categoria);

    await this.connection.query(
      "INSERT INTO produto(nome_produto, descricao, preco, quantidade_fornecedor, id_categoria) VALUES(${nome_produto}, ${descricao}, ${preco}, ${quantidade_fornecedor}, ${id_categoria})",
      {
        nome_produto: produto.nome_produto,
        descricao: produto.descricao,
        preco: produto.preco,
        quantidade_fornecedor: produto.quantidade_fornecedor,
        id_categoria: produto.id_categoria,
      }
    );

    return produto;
  }

  async update(id: string, { nome_produto, descricao, preco, quantidade_fornecedor, id_categoria }: IUpdateProdutoDTO): Promise<Produto | null> {
    try {
      const result = await this.connection.query(
        "UPDATE produto SET nome_produto = $1, descricao = $2, preco = $3, quantidade_fornecedor = $4, id_categoria = $5 WHERE id = $6 RETURNING *",
        [
          nome_produto,
          descricao,
          preco,
          quantidade_fornecedor,
          id_categoria,
          id,
        ]
      );

      if (result.rows && result.rows.length > 0) {
        const updatedProduto = new Produto(
          result.rows[0].nome_produto,
          result.rows[0].descricao,
          result.rows[0].preco,
          result.rows[0].quantidade_fornecedor,
          result.rows[0].id_categoria
        );
        updatedProduto.id = result.rows[0].id;
        return updatedProduto;
      }

      return null; // Produto não encontrado para atualização
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      throw error; // Rejeite a promise com o erro
    }
  }

  async findByName(nome_produto: string): Promise<Produto> {
    try {
      const produto = await this.connection.query(
        "SELECT * FROM produto WHERE nome_produto = ${nome_produto}",
        {
            nome_produto,
        }
      );

      return produto[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(id: string): Promise<Produto> {
    try {
      const produto = await this.connection.query(
        "SELECT * FROM produto WHERE id = ${id}",
        {
            id,
        }
      );

      return produto[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async selectAll(): Promise<Produto[]> {
    const produtos = await this.connection.query("SELECT * FROM produto");
    return produtos;
  }
}

export { ProdutoRepository };
