class Fornecedor {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  rua: string;
  bairro: string;
  quadra?: string;
  numero: string;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    rua: string,
    bairro: string,
    numero: string,
    quadra?: string
  ) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.quadra = quadra;
  }
}

export { Fornecedor };