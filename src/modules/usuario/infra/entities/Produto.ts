class Produto {
    id?: number;
    nome_produto: string;
    descricao: string;
    preco: number;
    quantidade_fornecedor: number;
    id_categoria: number;
  
    constructor(nome_produto: string, descricao: string, preco: number, quantidade_fornecedor: number, id_categoria: number) {
      this.nome_produto = nome_produto;
      this.descricao = descricao;
      this.preco = preco;
      this.quantidade_fornecedor = quantidade_fornecedor;
      this.id_categoria = id_categoria;
    }
  }
  
  export { Produto };
  