interface ICreateTransacaoFinanceiraDTO {
  id_transacao?: number;
  valor: number;
  descricao: string;
  id_tipo_transacao: number;
  id_usuario: number;
  id_conta: number;
  created_at?: Date;
  id_tipo_categoria: number;
}

export { ICreateTransacaoFinanceiraDTO };
