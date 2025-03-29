import { ICreateProdutoDTO } from "../dto/ICreateProdutoDTO";
import { Produto } from "../infra/entities/Produto";

interface IProdutoRepository {
  create(data: ICreateProdutoDTO): Promise<Produto>;
  findByName(email: string): Promise<Produto>;
  selectAll(): Promise<Produto[]>;
}

export { IProdutoRepository };
