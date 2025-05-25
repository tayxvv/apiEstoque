interface IUpdateMovimentacaoDTO {
    observacao: string;
    quantidade: number;
    data: Date;
    id_produto: number;
    id_tipo_movimentacao: number;
  }
  
export { IUpdateMovimentacaoDTO };
  