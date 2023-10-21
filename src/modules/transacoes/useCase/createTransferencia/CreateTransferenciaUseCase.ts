import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateTransacaoFinanceiraDTO } from "../../dto/ICreateTransacaoFinanceiraDTO";
import { TransacaoFinanceira } from "../../infra/entities/TransacaoFinanceira";
import { ITransacaoFinanceiraRepository } from "../../repositories/ITransacaoFinanceiraRepository";
@injectable()
class CreateTransferenciaUseCase {
  constructor(
    @inject("TransacaoFinanceiraRepository")
    private transacaoFinanceiraRepository: ITransacaoFinanceiraRepository
  ) {}
  async execute({
    valor,
    descricao,
    id_tipo_transacao,
    id_usuario,
    id_conta,
    id_tipo_categoria,
  }: ICreateTransacaoFinanceiraDTO): Promise<TransacaoFinanceira> {
    const transacaoFinanceira = await this.transacaoFinanceiraRepository.create(
      {
        valor,
        descricao,
        id_tipo_transacao,
        id_usuario,
        id_conta,
        id_tipo_categoria,
      }
    );
    return transacaoFinanceira;
  }
}
export { CreateTransferenciaUseCase };
