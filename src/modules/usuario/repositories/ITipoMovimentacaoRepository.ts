import { TipoMovimentacao } from "../infra/entities/TipoMovimentacao";

interface ITipoMovimentacaoRepository {
  selectAll(): Promise<TipoMovimentacao[]>;
}

export { ITipoMovimentacaoRepository };
