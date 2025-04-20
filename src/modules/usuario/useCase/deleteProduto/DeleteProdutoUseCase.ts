import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Produto } from "../../infra/entities/Produto";
import { IProdutoRepository } from "../../repositories/IProdutoRepository";
@injectable()
class DeleteProdutoUseCase {
  constructor(
    @inject("ProdutoRepository")
    private produtoRepository: IProdutoRepository
  ) {}
  async execute(id: string): Promise<void> {
    const produtoExists = await this.produtoRepository.findById(
      id
    );
    if (!produtoExists) {
      throw new AppError("Produto não existe!");
    }
    await this.produtoRepository.delete(id);
  }
}
export { DeleteProdutoUseCase };
