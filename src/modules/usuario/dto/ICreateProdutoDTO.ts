interface ICreateProdutoDTO {
    id?: number;
    nome_produto: string;
    descricao: string;
    preco: number;
    quantidade_fornecedor: number;
    id_categoria: number;
  }
  
export { ICreateProdutoDTO };
  