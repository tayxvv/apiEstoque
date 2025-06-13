import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateFornecedorDTO } from "../../dto/IUpdateFornecedorDTO";
import { Fornecedor } from "../../infra/entities/Fornecedor";
import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";

@injectable()
class UpdateFornecedorUseCase {
  constructor(
    @inject("FornecedorRepository")
    private fornecedorRepository: IFornecedorRepository
  ) {}

  async execute(id: string, {
    nome,
    email,
    telefone,
    rua,
    bairro,
    quadra,
    numero
  }: IUpdateFornecedorDTO): Promise<Fornecedor> {
    const fornecedorExists = await this.fornecedorRepository.findById(id);

    if (!fornecedorExists) {
      throw new AppError("Fornecedor não existe!");
    }

    const fornecedor = await this.fornecedorRepository.update(id, {
      nome,
      email,
      telefone,
      rua,
      bairro,
      quadra,
      numero
    });

    return fornecedor!;
  }
}

export { UpdateFornecedorUseCase };