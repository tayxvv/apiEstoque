import { Fornecedor } from "../infra/entities/Fornecedor";
import { ICreateFornecedorRawDTO } from "../dto/ICreateFornecedorRawDTO"; // <- CORRETO
import { IUpdateFornecedorDTO } from "../dto/IUpdateFornecedorDTO";

interface IFornecedorRepository {
  create(data: ICreateFornecedorRawDTO): Promise<Fornecedor>; // <- alterado aqui
  update(id: string, data: IUpdateFornecedorDTO): Promise<Fornecedor>;
  findById(id: string): Promise<Fornecedor | null>;
  findByName(nome: string): Promise<Fornecedor | null>;
  delete(id: string): Promise<void>;
  selectAll(): Promise<Fornecedor[]>;
}

export { IFornecedorRepository };