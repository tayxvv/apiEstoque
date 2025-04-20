import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Categoria } from "../../infra/entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";
import { hash } from "bcrypt";
@injectable()
class ListCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}
  async execute(): Promise<Categoria[]> {
    const categorias = await this.categoriaRepository.selectAll();
    return categorias;
  }
}
export { ListCategoriaUseCase };
