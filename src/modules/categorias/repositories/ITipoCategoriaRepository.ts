import { TipoCategoria } from "../infra/entities/TipoCategoria";

interface ITipoCategoriaRepository {
  selectAll(): Promise<TipoCategoria[]>;
}

export { ITipoCategoriaRepository };
