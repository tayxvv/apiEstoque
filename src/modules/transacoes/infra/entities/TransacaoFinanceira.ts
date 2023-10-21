class TransacaoFinanceira {
  id_transacao?: number;
  valor: number;
  descricao: string;
  id_tipo_transacao: number;
  id_usuario: number;
  id_conta: number;
  created_at?: Date;
  id_tipo_categoria: number;

  constructor(
    valor: number,
    descricao: string,
    id_tipo_transacao: number,
    id_usuario: number,
    id_conta: number,
    id_tipo_categoria: number
  ) {
    this.valor = valor;
    this.descricao = descricao;
    this.id_tipo_transacao = id_tipo_transacao;
    this.id_usuario = id_usuario;
    this.id_conta = id_conta;
    this.id_tipo_categoria = id_tipo_categoria;
  }
}

export { TransacaoFinanceira };
