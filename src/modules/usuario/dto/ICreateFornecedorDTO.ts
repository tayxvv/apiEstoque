interface ICreateFornecedorDTO {
  nome: string;
  email: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    quadra?: string;
  };
  telefone: {
    numero: string;
  };
}

export { ICreateFornecedorDTO };