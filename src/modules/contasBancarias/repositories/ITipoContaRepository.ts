import { TipoConta } from "../infra/entities/TipoConta";

interface ITipoContaRepository {
  selectAll(): Promise<TipoConta[]>;
}

export { ITipoContaRepository };
