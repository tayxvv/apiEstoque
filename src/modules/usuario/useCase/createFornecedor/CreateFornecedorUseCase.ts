import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateFornecedorDTO } from "../../dto/ICreateFornecedorDTO";
import { Fornecedor } from "../../infra/entities/Fornecedor";

import { IFornecedorRepository } from "../../repositories/IFornecedorRepository";
import { ITelefoneRepository } from "../../repositories/ITelefoneRepository";
import { IEnderecoRepository } from "../../repositories/IEnderecoRepository";

@injectable()
class CreateFornecedorUseCase {
  constructor(
    @inject("FornecedorRepository")
    private fornecedorRepository: IFornecedorRepository,

    @inject("TelefoneRepository")
    private telefoneRepository: ITelefoneRepository,

    @inject("EnderecoRepository")
    private enderecoRepository: IEnderecoRepository
  ) {}

  async execute(data: ICreateFornecedorDTO): Promise<Fornecedor> {
    const fornecedorExists = await this.fornecedorRepository.findByName(data.nome);
    if (fornecedorExists) {
      throw new AppError("Fornecedor já existe!");
    }

    const telefone = await this.telefoneRepository.create({
      numero: data.telefone.numero,
    });

    const endereco = await this.enderecoRepository.create({
      rua: data.endereco.rua,
      numero: data.endereco.numero,
      bairro: data.endereco.bairro,
      quadra: data.endereco.quadra,
    });

    const fornecedor = await this.fornecedorRepository.create({
      nome: data.nome,
      email: data.email,
      endereco,
      telefone,
    });

    return fornecedor;
  }
}

export { CreateFornecedorUseCase };
