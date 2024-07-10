export interface DataTypes {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  tipo: string;
  data_cadastro: Date | string;
  foto: string;
}

export interface ProdutoTypes {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
}