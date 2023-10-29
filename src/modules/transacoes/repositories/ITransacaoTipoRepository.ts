import { TransacaoTipo } from "../infra/entities/TransacaoTipo";

interface ITransacaoTipoRepository {
  selectAll(): Promise<TransacaoTipo[]>;
}

export { ITransacaoTipoRepository };
