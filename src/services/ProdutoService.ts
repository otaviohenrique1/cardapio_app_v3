import { ProdutoModel } from "../models/ProdutoModel";
import { db } from '../database/database-connection';
import { DataTypes, ProdutoTypes } from "../types/types";

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

export async function atualizaProduto(produto: ProdutoTypes) {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE produtos SET nome = ?, descricao = ?, preco = ?, foto = ? WHERE id = ?;", [produto.nome, produto.descricao, produto.preco, produto.foto, produto.id], () => {
        resolve("Produto atualizado com sucesso!");
      });
    });
  })
}

export async function removeNota(produto: DataTypes) {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM produtos WHERE id = ?;", [produto.id], () => {
        resolve("Produto removido com sucesso!");
      });
    });
  })
}

export async function buscaNotas() {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM produtos;", [], (transaction, resultado) => {
        resolve(resultado.rows._array);
      });
    });
  })
}
