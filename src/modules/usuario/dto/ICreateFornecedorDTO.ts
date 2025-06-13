interface ICreateFornecedorDTO {
  id?: number;
  nome: string;
  email: string;
  telefone:string;
  rua: string;
  bairro: string;
  quadra?: string;
  numero: string;
}

export { ICreateFornecedorDTO };