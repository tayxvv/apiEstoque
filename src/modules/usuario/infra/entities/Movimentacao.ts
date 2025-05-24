class Movimentacao {
    id: number;
    observacao: string;
    quantidade: number;
    data: Date;
    id_produto: number;
    id_tipo_movimentacao: number;
  
    constructor(observacao: string, quantidade: number, data: Date, id_produto: number, id_tipo_movimentacao: number) {
      this.observacao = observacao;
      this.quantidade = quantidade;
      this.data = data;
      this.id_produto = id_produto;
      this.id_tipo_movimentacao = id_tipo_movimentacao;
    }
  }
  
export { Movimentacao };
