import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateContaBancariaDTO } from "../../dto/IUpdateContaBancariaDTO";
import { ContaBancaria } from "../../infra/entities/ContaBancaria";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
@injectable()
class UpdateContaBancariaUseCase {
  constructor(
    @inject("ContasBancariasRepository")
    private contasBancariasRepository: IContasBancariasRepository
  ) {}
  async execute({
    id_conta,
    numero_conta,
    saldo,
    nome_conta,
    id_tipo_conta,
  }: IUpdateContaBancariaDTO): Promise<ContaBancaria> {
    return await this.contasBancariasRepository.update({
      id_conta,
      numero_conta,
      saldo,
      nome_conta,
      id_tipo_conta,
    });
  }
}
export { UpdateContaBancariaUseCase };
