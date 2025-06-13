import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Fornecedor } from "../../infra/entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { hash } from "bcrypt";
@injectable()
class ListFornecedorUseCase {
  constructor(
    @inject("FornecedorRepository")
    private fornecedorRepository: IFornecedorRepository
  ) {}
  async execute(): Promise<Fornecedor[]> {
    const fornecedores = await this.fornecedorRepository.selectAll();
    return fornecedores;
  }
}
export { ListFornecedorUseCase };