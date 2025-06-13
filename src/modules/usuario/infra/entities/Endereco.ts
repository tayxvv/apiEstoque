class Endereco {
  id: number;
  numero: string;
  rua: string;
  bairro: string;
  quadra?: string;

  constructor(numero: string, rua: string, bairro: string, quadra?: string) {
    this.numero = numero;
    this.rua = rua;
    this.bairro = bairro;
    this.quadra = quadra;
  }
}

export { Endereco };