import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { TransacaoTipo } from "../../infra/entities/TransacaoTipo";
import { ITransacaoTipoRepository } from "../../repositories/ITransacaoTipoRepository";
@injectable()
class ListTipoTransferenciaUseCase {
  constructor(
    @inject("TransacaoTipoRepository")
    private transacaoTipoRepository: ITransacaoTipoRepository
  ) {}
  async execute(): Promise<TransacaoTipo[]> {
    const tiposTransacoes = await this.transacaoTipoRepository.selectAll();
    return tiposTransacoes;
  }
}

export { ListTipoTransferenciaUseCase };
