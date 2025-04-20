import { ICreateProdutoDTO } from "../dto/ICreateProdutoDTO";
import { IUpdateProdutoDTO } from "../dto/IUpdateProdutoDTO";
import { Produto } from "../infra/entities/Produto";

interface IProdutoRepository {
  create(data: ICreateProdutoDTO): Promise<Produto>;
  update(id: string, data: IUpdateProdutoDTO): Promise<Produto>;
  findByName(email: string): Promise<Produto>;
  findById(id: string): Promise<Produto>;
  selectAll(): Promise<Produto[]>;
  delete(id: string): Promise<void>;
}

export { IProdutoRepository };
