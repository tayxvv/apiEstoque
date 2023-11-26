import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ContaBancaria } from "../../infra/entities/ContaBancaria";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
import { IDeleteContaBancariaDTO } from "../../dto/IDeleteContaBancariaDTO";
@injectable()
class DeleteContaBancariaUseCase {
  constructor(
    @inject("ContasBancariasRepository")
    private contasBancariasRepository: IContasBancariasRepository
  ) {}
  async execute({ id }: IDeleteContaBancariaDTO): Promise<void> {
    await this.contasBancariasRepository.delete(id);
  }
}
export { DeleteContaBancariaUseCase };
