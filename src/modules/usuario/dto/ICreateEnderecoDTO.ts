interface ICreateEnderecoDTO {
  id?: number;
  numero: string;
  rua: string;
  bairro: string;
  quadra?: string;
}

export { ICreateEnderecoDTO };