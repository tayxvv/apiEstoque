import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Movimentacao } from "../../infra/entities/Movimentacao";
import { IMovimentacaoRepository } from "../../repositories/IMovimentacaoRepository";
import { hash } from "bcrypt";
@injectable()
class ListMovimentacaoUseCase {
  constructor(
    @inject("MovimentacaoRepository")
    private movimentacaoRepository: IMovimentacaoRepository
  ) {}
  async execute(): Promise<Movimentacao[]> {
    const movimentacoes = await this.movimentacaoRepository.selectAll();
    return movimentacoes;
  }
}
export { ListMovimentacaoUseCase };
