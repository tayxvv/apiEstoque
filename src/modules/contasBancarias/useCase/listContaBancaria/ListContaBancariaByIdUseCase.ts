import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
import { ContaBancaria } from "../../infra/entities/ContaBancaria";
@injectable()
class ListContaBancariaByIdUseCase {
  constructor(
    @inject("ContasBancariasRepository")
    private contasBancariasRepository: IContasBancariasRepository
  ) {}

  async execute(id: string): Promise<ContaBancaria> {
    const contaBancaria = await this.contasBancariasRepository.findById(id);
    return contaBancaria;
  }
}

export { ListContaBancariaByIdUseCase };
