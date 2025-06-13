import { ICreateTelefoneDTO } from "../dto/ICreateTelefoneDTO";
import { IUpdateTelefoneDTO } from "../dto/IUpdateTelefoneDTO";
import { Telefone } from "../infra/entities/Telefone";

interface ITelefoneRepository {
  create(data: ICreateTelefoneDTO): Promise<Telefone>;
  update(id: string, data: IUpdateTelefoneDTO): Promise<Telefone>;
  findById(id: string): Promise<Telefone>;
  selectAll(): Promise<Telefone[]>;
}

export { ITelefoneRepository };