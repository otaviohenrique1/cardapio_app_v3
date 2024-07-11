import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import styles from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStaticParamList } from '../routes';
import { buscaProdutos } from '../../services/ProdutoService';
import { ProdutoTypes } from '../../types/types';

type Props = NativeStackScreenProps<RootStaticParamList, 'Carrinho'>;

export default function Carrinho({ route }: Props) {
  const [data, setData] = useState<any[]>([])
  async function exibeProdutos() {
    const todosOsProdutos = await buscaProdutos();
    setData(todosOsProdutos)
  }

  useEffect(() => {
    exibeProdutos();
  }, [])
  

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Text>Nome: {item.nome}</Text>
          )
        }}
        keyExtractor={item => item.id}
      />
      <StatusBar style="dark" backgroundColor='cadetblue' />
    </View>
  );
}
