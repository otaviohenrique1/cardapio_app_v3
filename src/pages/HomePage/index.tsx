import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { DataTypes, ProdutoTypes } from '../../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStaticParamList } from '../routes';
import { adicionaProduto, criaTabela } from '../../services/ProdutoService';

type Props = NativeStackScreenProps<RootStaticParamList, 'Cardapio'>;

export default function HomePage({ navigation }: Props) {
  const [data, setData] = useState<DataTypes[]>([]);
  useEffect(() => {
    criaTabela();
  }, []);

  useEffect(() => {
    fetch("http://10.0.2.2:8000/produtos/")
      .then((data) => data.json())
      .then((data) => {
        // console.log(data)
        setData(data)
      })
      .catch((erro) => {
        console.error("erro => ", erro);
      })
  }, []);

  async function salvarProduto(produto: ProdutoTypes) {
    await adicionaProduto(produto)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.lista}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Detalhes', {
                id: item.id
              })}
            >
              <Image
                style={styles.item_foto}
                source={{ uri: item.foto }}
              />
              <View style={styles.item_conteudo}>
                <View>
                  <Text style={styles.item_texto}>{item.nome}</Text>
                  <Text style={styles.item_texto}>R$ {item.preco.toString().replace(".", ",")}</Text>
                </View>
                <View style={styles.item_botoes}>
                  <TouchableOpacity style={styles.item_botao_adicionar}>
                    <IconOcticons
                      name="plus-circle"
                      size={40}
                      onPress={() => {
                        const produto = {
                          nome: item.nome,
                          descricao: item.descricao,
                          preco: item.preco,
                          foto: item.foto,
                        };
                        salvarProduto(produto);
                        // console.log(produto);
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
      <StatusBar style="dark" backgroundColor='cadetblue' />
    </View>
  );
}
