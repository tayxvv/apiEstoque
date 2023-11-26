import { ICreateContaBancariaDTO } from "../dto/ICreateContaBancariaDTO";
import { IUpdateContaBancariaDTO } from "../dto/IUpdateContaBancariaDTO";
import { ContaBancaria } from "../infra/entities/ContaBancaria";

interface IContasBancariasRepository {
  create(data: ICreateContaBancariaDTO): Promise<ContaBancaria>;
  selectAll(): Promise<ContaBancaria[]>;
  findById(id: string): Promise<ContaBancaria>;
  update(data: IUpdateContaBancariaDTO): Promise<ContaBancaria>;
  delete(id: string): Promise<void>;
}

export { IContasBancariasRepository };
