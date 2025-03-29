import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateProdutoDTO } from "../../dto/ICreateProdutoDTO";
import { Produto } from "../../infra/entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
@injectable()
class CreateProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}
  async execute({ nome_produto, descricao, preco, quantidade_fornecedor, id_categoria }: ICreateProdutoDTO): Promise<Produto> {
    const produtoAlreadyExists = await this.produtoRepository.findByName(
      nome_produto
    );
    if (produtoAlreadyExists) {
      throw new AppError("Produto já existe!");
    }
    const produto = await this.produtoRepository.create({
      nome_produto, 
      descricao, 
      preco, 
      quantidade_fornecedor, 
      id_categoria
    });
    return produto;
  }
}
export { CreateProdutoUseCase };
