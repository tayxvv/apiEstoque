interface ICreateContaBancariaDTO {
  id_conta?: number;
  numero_conta: string;
  saldo: number;
  nome_conta: string;
  id_tipo_conta: number;
  id_usuario: number;
}

export { ICreateContaBancariaDTO };
