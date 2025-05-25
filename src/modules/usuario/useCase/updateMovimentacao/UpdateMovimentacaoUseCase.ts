import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateMovimentacaoDTO } from "../../dto/IUpdateMovimentacaoDTO";
import { Movimentacao } from "../../infra/entities/Movimentacao";
import { IMovimentacaoRepository } from "../../repositories/IMovimentacaoRepository";
@injectable()
class UpdateMovimentacaoUseCase {
  constructor(
    @inject("MovimentacaoRepository")
    private movimentacaoRepository: IMovimentacaoRepository
  ) {}
  async execute(id: string, { observacao, quantidade, data, id_produto, id_tipo_movimentacao }: IUpdateMovimentacaoDTO): Promise<Movimentacao> {
    const movimentacao = await this.movimentacaoRepository.update(id, {
      observacao, 
      quantidade, 
      data, 
      id_produto, 
      id_tipo_movimentacao
    });
    return movimentacao;
  }
}
export { UpdateMovimentacaoUseCase };
