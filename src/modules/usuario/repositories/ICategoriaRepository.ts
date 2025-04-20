import { Categoria } from "../infra/entities/Categoria";

interface ICategoriaRepository {
  selectAll(): Promise<Categoria[]>;
}

export { ICategoriaRepository };
