import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateProdutoDTO } from "../../dto/IUpdateProdutoDTO";
import { Produto } from "../../infra/entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
@injectable()
class UpdateProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}
  async execute(id: string, {nome_produto, descricao, preco, quantidade_fornecedor, id_categoria }: IUpdateProdutoDTO): Promise<Produto> {
    const produtoExists = await this.produtoRepository.findById(
      id
    );
    if (!produtoExists) {
      throw new AppError("Produto não existe!");
    }
    const produto = await this.produtoRepository.update(id, {
      nome_produto, 
      descricao, 
      preco, 
      quantidade_fornecedor, 
      id_categoria
    });
    return produto;
  }
}
export { UpdateProdutoUseCase };
