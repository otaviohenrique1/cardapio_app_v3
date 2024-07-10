export class ProdutoModel {
  public id: number;
  public nome: string;
  public descricao: string;
  public preco: number;
  public foto: string;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    foto: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.foto = foto;
  }

}