import { db } from '../database/database-connection';
import { ProdutoTypes } from "../types/types";

export function criaTabela() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS produtos (" +
      "id INTEGER PRIMARY KEY AUTOINCREMENT," +
      "nome TEXT," +
      "descricao TEXT," +
      "preco NUMERIC(10,2)" +
      "foto TEXT" +
      ");"
    );
  });
}

export async function adicionaProduto(produto: ProdutoTypes) {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO produtos (nome, descricao, preco, foto) VALUES (?, ?, ?, ?);", [produto.nome, produto.descricao, produto.preco, produto.foto], () => {
        resolve("Produto adicionado com sucesso!");
      });
    });
  })
}

export async function atualizaProduto(produto: ProdutoTypes, id: number) {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE produtos SET nome = ?, descricao = ?, preco = ?, foto = ? WHERE id = ?;", [produto.nome, produto.descricao, produto.preco, produto.foto, id], () => {
        resolve("Produto atualizado com sucesso!");
      });
    });
  })
}

export async function removeProduto(id: number) {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM produtos WHERE id = ?;", [id], () => {
        resolve("Produto removido com sucesso!");
      });
    });
  })
}

export async function buscaProdutos() {
  return new Promise<any[]>((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * FROM produtos;",
        [],
        (transaction, resultado) => {
          resolve(resultado.rows._array);
        });
    });
  })
}

export async function buscaProduto(id: number) {
  return new Promise<any>((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * FROM produtos WHERE id = ?;",
        [id],
        (transaction, resultado) => {
          resolve(resultado.rows._array);
        });
    });
  })
}
