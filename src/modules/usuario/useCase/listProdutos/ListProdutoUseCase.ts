import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Produto } from "../../infra/entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
import { hash } from "bcrypt";
@injectable()
class ListProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}
  async execute(): Promise<Produto[]> {
    const produtos = await this.produtoRepository.selectAll();
    return produtos;
  }
}
export { ListProdutoUseCase };
