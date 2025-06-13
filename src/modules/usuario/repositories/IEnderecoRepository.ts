import { ICreateEnderecoDTO } from "../dto/ICreateEnderecoDTO";
import { IUpdateEnderecoDTO } from "../dto/IUpdateEnderecoDTO";
import { Endereco } from "../infra/entities/Endereco";

interface IEnderecoRepository {
  create(data: ICreateEnderecoDTO): Promise<Endereco>;
  update(id: string, data: IUpdateEnderecoDTO): Promise<Endereco>;
  findById(id: string): Promise<Endereco>;
  selectAll(): Promise<Endereco[]>;
}

export { IEnderecoRepository };