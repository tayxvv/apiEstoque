import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { TipoMovimentacao } from "../../infra/entities/TipoMovimentacao";
import { ITipoMovimentacaoRepository } from "../../repositories/ITipoMovimentacaoRepository";
import { hash } from "bcrypt";
@injectable()
class ListTipoMovimentacaoUseCase {
  constructor(
    @inject("TipoMovimentacaoRepository")
    private tipoMovimentacaoRepository: ITipoMovimentacaoRepository
  ) {}
  async execute(): Promise<TipoMovimentacao[]> {
    const tipoMovimentacoes = await this.tipoMovimentacaoRepository.selectAll();
    return tipoMovimentacoes;
  }
}
export { ListTipoMovimentacaoUseCase };
