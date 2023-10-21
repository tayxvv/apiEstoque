import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateContaBancariaDTO } from "../../dto/ICreateContaBancariaDTO";
import { ContaBancaria } from "../../infra/entities/ContaBancaria";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
@injectable()
class CreateContaBancariaUseCase {
  constructor(
    @inject("ContasBancariasRepository")
    private contasBancariasRepository: IContasBancariasRepository
  ) {}
  async execute({
    numero_conta,
    saldo,
    nome_conta,
    id_tipo_conta,
    id_usuario,
  }: ICreateContaBancariaDTO): Promise<ContaBancaria> {
    const contaBancaria = await this.contasBancariasRepository.create({
      numero_conta,
      saldo,
      nome_conta,
      id_tipo_conta,
      id_usuario,
    });
    return contaBancaria;
  }
}
export { CreateContaBancariaUseCase };
