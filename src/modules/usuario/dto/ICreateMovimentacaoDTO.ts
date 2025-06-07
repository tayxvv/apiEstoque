interface ICreateMovimentacaoDTO {
    id?: number;
    observacao: string;
    quantidade: number;
    data: string;
    id_produto: number;
    id_tipo_movimentacao: number;
  }
  
export { ICreateMovimentacaoDTO };
  