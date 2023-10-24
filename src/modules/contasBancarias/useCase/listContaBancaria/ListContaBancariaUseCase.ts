import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
import { ContaBancaria } from "../../infra/entities/ContaBancaria";
@injectable()
class ListContaBancariaUseCase {
  constructor(
    @inject("ContasBancariasRepository")
    private contasBancariasRepository: IContasBancariasRepository
  ) {}
  async execute(): Promise<ContaBancaria[]> {
    const contaBancaria = await this.contasBancariasRepository.selectAll();
    return contaBancaria;
  }
}

export { ListContaBancariaUseCase };
