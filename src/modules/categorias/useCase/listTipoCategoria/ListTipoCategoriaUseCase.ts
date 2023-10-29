import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { TipoCategoria } from "../../infra/entities/TipoCategoria";
import { ITipoCategoriaRepository } from "../../repositories/ITipoCategoriaRepository";
@injectable()
class ListTipoCategoriaUseCase {
  constructor(
    @inject("TipoCategoriaRepository")
    private tipoCategoriaRepository: ITipoCategoriaRepository
  ) {}
  async execute(): Promise<TipoCategoria[]> {
    const tiposCategorias = await this.tipoCategoriaRepository.selectAll();
    return tiposCategorias;
  }
}

export { ListTipoCategoriaUseCase };
