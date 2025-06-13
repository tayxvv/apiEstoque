import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateFornecedorDTO } from "../../dto/ICreateFornecedorDTO";
import { Fornecedor } from "../../infra/entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";

@injectable()
class CreateFornecedorUseCase {
  constructor(
    @inject("FornecedorRepository")
    private fornecedorRepository: IFornecedorRepository
  ) {}

  async execute({
    nome,
    email,
    telefone,
    rua,
    bairro,
    quadra,
    numero
  }: ICreateFornecedorDTO): Promise<Fornecedor> {
    const fornecedorExists = await this.fornecedorRepository.findByName(nome);

    if (fornecedorExists) {
      throw new AppError("Fornecedor já existe!");
    }

    const fornecedor = await this.fornecedorRepository.create({
      nome,
      email,
      telefone,
      rua,
      bairro,
      quadra,
      numero
    });

    return fornecedor;
  }
}

export { CreateFornecedorUseCase };