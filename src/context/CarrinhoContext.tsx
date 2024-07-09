import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { ProdutoTypes } from '../types/types';

type CarrinhoContextType = {
  lista: ProdutoTypes[];
  salvarNoCarrinho: (produto: ProdutoTypes) => void
};

export const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export const useCarrinhoContext = () => {
  const context = useContext(CarrinhoContext);
  if (context) {
    throw new Error('useCarrinhoContext deve ser usado dentro de um UserProvider');
  }
  return context;
}

export const CarrinhoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lista, setLista] = useState<ProdutoTypes[]>([]);

  const salvarNoCarrinho = (produto: ProdutoTypes) => {
    const novoProduto: ProdutoTypes = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      foto: produto.foto
    };
    setLista([...lista, novoProduto]);
  };

  const atualiza = (index: number) => {
    
  };

  return (
    <CarrinhoContext.Provider
      value={{ lista, salvarNoCarrinho }}
    >{children}</CarrinhoContext.Provider>
  );
};
