import { ICreateContaBancariaDTO } from "../dto/ICreateContaBancariaDTO";
import { ContaBancaria } from "../infra/entities/ContaBancaria";

interface IContasBancariasRepository {
  create(data: ICreateContaBancariaDTO): Promise<ContaBancaria>;
  selectAll(): Promise<ContaBancaria[]>;
}

export { IContasBancariasRepository };
