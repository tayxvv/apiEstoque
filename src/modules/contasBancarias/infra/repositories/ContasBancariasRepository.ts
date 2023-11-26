import { IDatabase } from "pg-promise";
import { ContaBancaria } from "../entities/ContaBancaria";
import { IContasBancariasRepository } from "../../repositories/IContasBancariasRepository";
import { ICreateContaBancariaDTO } from "../../dto/ICreateContaBancariaDTO";
import { Connection } from "../../../../shared/infra/database/Connection";
import { IUpdateContaBancariaDTO } from "../../dto/IUpdateContaBancariaDTO";

class ContasBancariasRepository implements IContasBancariasRepository {
  connection: any;

  static instance: any;

  constructor() {
    if (!ContasBancariasRepository.instance) {
      ContasBancariasRepository.instance = this;
      this.connection = new Connection();
    }

    return ContasBancariasRepository.instance;
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

  async findById(id: string): Promise<ContaBancaria> {
    const contaBancaria = await this.connection.query(
      `
      SELECT
        tc.id_conta,
        tc.numero_conta,
        CAST(ROUND(tc.saldo, 2) AS DECIMAL(10,2)) as saldo,
        tc.nome_conta,
        TO_CHAR(tc.created_at, 'DD/MM/YYYY') as data_conta,
        tc2.nome as nome_tipo_conta
      FROM
        conta_bancaria tc
        INNER JOIN usuario u ON u.id_usuario = tc.id_usuario
        INNER JOIN tipo_conta tc2 ON tc2.id_tipo_conta = tc.id_tipo_conta
      WHERE
        tc.id_conta = $1;
      `,
      [id]
    );

    if (contaBancaria && contaBancaria.length > 0) {
      return contaBancaria[0];
    } else {
      return null;
    }
  }

  async update({
    id_conta,
    numero_conta,
    saldo,
    nome_conta,
    id_tipo_conta,
  }: IUpdateContaBancariaDTO): Promise<ContaBancaria> {
    await this.connection.query(
      "UPDATE conta_bancaria SET saldo = ${novo_saldo}, numero_conta = ${numero_conta}, nome_conta = ${novo_nome_conta}, id_tipo_conta = ${novo_id_tipo_conta} WHERE id_conta = ${id_conta}",
      {
        id_conta: id_conta,
        numero_conta: numero_conta,
        novo_saldo: saldo,
        novo_nome_conta: nome_conta,
        novo_id_tipo_conta: id_tipo_conta,
      }
    );

    return;
  }

  async delete(id: string): Promise<void> {
    const existingAccount = await this.findById(id);

    if (!existingAccount) {
      throw new Error("Account not found");
    }

    await this.connection.query(
      `
      DELETE FROM conta_bancaria
      WHERE id_conta = $1;
      `,
      [id]
    );
  }
}

export { ContasBancariasRepository };
