import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ICreateFornecedorDTO } from "../../dto/ICreateFornecedorDTO";
import { ICreateFornecedorRawDTO } from "../../dto/ICreateFornecedorRawDTO";
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

  async execute({
    nome,
    email,
    telefone,
    endereco,
  }: ICreateFornecedorDTO): Promise<Fornecedor> {
    const telefoneCriado = await this.telefoneRepository.create({
      numero: telefone.numero,
    });

    const enderecoCriado = await this.enderecoRepository.create({
      rua: endereco.rua,
      numero: endereco.numero,
      bairro: endereco.bairro,
      quadra: endereco.quadra,
    });

    const rawData: ICreateFornecedorRawDTO = {
      nome,
      email,
      id_telefone: telefoneCriado.id,
      id_endereco: enderecoCriado.id,
    };

    const fornecedor = await this.fornecedorRepository.create(rawData);
    return fornecedor;
  }
}

export { CreateFornecedorUseCase };