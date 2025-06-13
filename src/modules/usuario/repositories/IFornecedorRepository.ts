import { ICreateFornecedorDTO } from "../dto/ICreateFornecedorDTO";
import { IUpdateFornecedorDTO } from "../dto/IUpdateFornecedorDTO";
import { Fornecedor } from "../infra/entities/Fornecedor";

interface IFornecedorRepository {
  create(data: ICreateFornecedorDTO): Promise<Fornecedor>;
  update(id: string, data: IUpdateFornecedorDTO): Promise<Fornecedor>;
  findByName(nome: string): Promise<Fornecedor>;
  findById(id: string): Promise<Fornecedor>;
  selectAll(): Promise<Fornecedor[]>;
  delete(id: string): Promise<void>;
}

export { IFornecedorRepository };