import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateMovimentacaoDTO } from "../../dto/ICreateMovimentacaoDTO";
import { Movimentacao } from "../../infra/entities/Movimentacao";
import { IMovimentacaoRepository } from "../../repositories/IMovimentacaoRepository";
@injectable()
class CreateMovimentacaoUseCase {
  constructor(
    @inject("MovimentacaoRepository")
    private movimentacaoRepository: IMovimentacaoRepository
  ) {}
  async execute({ observacao, quantidade, data, id_produto, id_tipo_movimentacao }: ICreateMovimentacaoDTO): Promise<Movimentacao> {
    const movimentacao = await this.movimentacaoRepository.create({
      observacao, 
      quantidade, 
      data, 
      id_produto, 
      id_tipo_movimentacao
    });
    return movimentacao;
  }
}
export { CreateMovimentacaoUseCase };
