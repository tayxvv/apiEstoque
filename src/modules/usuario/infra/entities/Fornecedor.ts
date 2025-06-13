class Fornecedor {
  id: number;
  nome: string;
  email: string;
  id_endereco: number;
  id_telefone: number;

  constructor(nome: string, email: string, id_endereco: number, id_telefone: number) {
    this.nome = nome;
    this.email = email;
    this.id_endereco = id_endereco;
    this.id_telefone = id_telefone;
  }
}

export { Fornecedor };