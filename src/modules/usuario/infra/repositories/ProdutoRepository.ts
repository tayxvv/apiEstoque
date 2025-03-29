import { IDatabase } from "pg-promise";
import { Produto } from "../entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
import { ICreateProdutoDTO } from "../../dto/ICreateProdutoDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

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

  async selectAll(): Promise<Produto[]> {
    const produtos = await this.connection.query("SELECT * FROM produto");
    return produtos;
  }
}

export { ProdutoRepository };
