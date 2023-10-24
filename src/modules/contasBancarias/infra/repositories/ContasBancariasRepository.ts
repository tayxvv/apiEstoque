import { IDatabase } from "pg-promise";
import { ContaBancaria } from "../entities/ContaBancaria";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
import { ICreateContaBancariaDTO } from "../../dto/ICreateContaBancariaDTO";
import { Connection } from "../../../../shared/infra/database/Connection";

class ContasBancariasRepository implements IContasBancariasRepository {
  connection: any;

  constructor() {
    this.connection = new Connection();
  }

  async create({
    numero_conta,
    saldo,
    nome_conta,
    id_tipo_conta,
    id_usuario,
  }: ICreateContaBancariaDTO): Promise<ContaBancaria> {
    const contaBancaria = new ContaBancaria(
      numero_conta,
      saldo,
      nome_conta,
      id_tipo_conta,
      id_usuario
    );

    console.log(numero_conta, saldo, nome_conta, id_tipo_conta, id_usuario);

    await this.connection.query(
      "INSERT INTO conta_bancaria(numero_conta,saldo,nome_conta,id_tipo_conta,id_usuario) VALUES(${numero_conta},${saldo},${nome_conta},${id_tipo_conta},${id_usuario})",
      {
        numero_conta: contaBancaria.numero_conta,
        saldo: contaBancaria.saldo,
        nome_conta: contaBancaria.nome_conta,
        id_tipo_conta: contaBancaria.id_tipo_conta,
        id_usuario: contaBancaria.id_usuario,
      }
    );

    return contaBancaria;
  }

  async selectAll(): Promise<ContaBancaria[]> {
    const contaBancarias = await this.connection.query(
      "SELECT * FROM conta_bancaria"
    );
    return contaBancarias;
  }
}

export { ContasBancariasRepository };
