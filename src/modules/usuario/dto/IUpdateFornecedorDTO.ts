interface IUpdateFornecedorDTO {
  nome: string;
  email: string;
  telefone: {
    numero: string;
  };
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    quadra: string;
  };
}

export { IUpdateFornecedorDTO };