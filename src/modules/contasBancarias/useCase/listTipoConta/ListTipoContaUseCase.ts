import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ITipoContaRepository } from "../../repositories/ITipoContaRepository";
import { TipoConta } from "../../infra/entities/TipoConta";
@injectable()
class ListTipoContaUseCase {
  constructor(
    @inject("TipoContaRepository")
    private tipoContaRepository: ITipoContaRepository
  ) {}
  async execute(): Promise<TipoConta[]> {
    const tiposContas = await this.tipoContaRepository.selectAll();
    return tiposContas;
  }
}

export { ListTipoContaUseCase };
