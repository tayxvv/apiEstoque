import { Fornecedor } from "../infra/entities/Fornecedor";
import { ICreateFornecedorDTO } from "../dto/ICreateFornecedorDTO";
import { IUpdateFornecedorDTO } from "../dto/IUpdateFornecedorDTO";

interface IFornecedorRepository {
  create(data: ICreateFornecedorDTO): Promise<Fornecedor>;
  update(id: string, data: IUpdateFornecedorDTO): Promise<Fornecedor>;
  findById(id: string): Promise<Fornecedor | null>;
  findByName(nome: string): Promise<Fornecedor | null>;
  delete(id: number): Promise<void>;
  selectAll(): Promise<Fornecedor[]>;
}

export { IFornecedorRepository };