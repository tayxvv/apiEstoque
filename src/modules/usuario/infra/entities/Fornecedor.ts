class Fornecedor {
  id: number;
  nome: string;
  email: string;
  id_endereco: string;
  id_telefone: string;

  constructor(nome: string, email: string, id_endereco: string, id_telefone: string) {
    this.nome = nome;
    this.email = email;
    this.id_endereco = id_endereco;
    this.id_telefone = id_telefone;
  }
}

export { Fornecedor };