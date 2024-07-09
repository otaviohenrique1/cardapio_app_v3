import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import DataTypes from '../../types/types';

export default function HomePage() {
  const [data, setData] = useState<DataTypes[]>([]);

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
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.lista}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.item}>
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
                    <IconOcticons name="plus-circle" size={40} />
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
