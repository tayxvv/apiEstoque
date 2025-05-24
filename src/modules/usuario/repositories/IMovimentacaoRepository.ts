import { ICreateMovimentacaoDTO } from "../dto/ICreateMovimentacaoDTO";
import { IUpdateMovimentacaoDTO } from "../dto/IUpdateMovimentacaoDTO";
import { Movimentacao } from "../infra/entities/Movimentacao";

interface IMovimentacaoRepository {
  create(data: ICreateMovimentacaoDTO): Promise<Movimentacao>;
  update(id: string, data: IUpdateMovimentacaoDTO): Promise<Movimentacao>;
  findById(id: string): Promise<Movimentacao>;
  selectAll(): Promise<Movimentacao[]>;
}

export { IMovimentacaoRepository };
