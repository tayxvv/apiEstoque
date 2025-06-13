import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateMovimentacaoDTO } from "../../dto/ICreateMovimentacaoDTO";
import { Movimentacao } from "../../infra/entities/Movimentacao";
import { IMovimentacaoRepository } from "../../repositories/IMovimentacaoRepository";
function formatarData(data: string): string {
  const [dia, mes, ano] = data.split('/');
  return `${ano}-${mes}-${dia}`;
}

@injectable()
class CreateMovimentacaoUseCase {
  constructor(
    @inject("MovimentacaoRepository")
    private movimentacaoRepository: IMovimentacaoRepository
  ) {}

  async execute({ observacao, quantidade, data, id_produto, id_tipo_movimentacao }: ICreateMovimentacaoDTO): Promise<Movimentacao> {
    const dataFormatada = formatarData(data); // converte de "13/06/2025" para "2025-06-13"

    const movimentacao = await this.movimentacaoRepository.create({
      observacao,
      quantidade,
      data: dataFormatada,
      id_produto,
      id_tipo_movimentacao
    });

    return movimentacao;
  }
}

export { CreateMovimentacaoUseCase };
