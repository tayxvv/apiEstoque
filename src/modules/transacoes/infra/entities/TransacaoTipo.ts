class TransacaoTipo {
  id_tipo_transacao?: number;
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

export { TransacaoTipo };
