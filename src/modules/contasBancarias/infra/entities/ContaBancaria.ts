class ContaBancaria {
  id_conta?: number;
  numero_conta: string;
  saldo: number;
  nome_conta: string;
  id_tipo_conta: number;
  id_usuario: number;

  constructor(
    numero_conta: string,
    saldo: number,
    nome_conta: string,
    id_tipo_conta: number,
    id_usuario: number
  ) {
    this.numero_conta = numero_conta;
    this.saldo = saldo;
    this.nome_conta = nome_conta;
    this.id_tipo_conta = id_tipo_conta;
    this.id_usuario = id_usuario;
  }
}

export { ContaBancaria };
