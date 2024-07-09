import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from "expo-constants";

// import api from './utils/api';
// import axios from 'axios';

interface DataTypes {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  tipo: string;
  data_cadastro: Date | string;
  foto: string;
}

export default function App() {
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
      <View style={styles.header}>
        <Text style={styles.header_titulo}>Cardapio</Text>
        <TouchableOpacity>
          <IconMaterialCommunityIcons name="cart-variant" size={40} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        style={styles.lista}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
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
                  <TouchableOpacity>
                    <IconEntypo name="arrow-with-circle-right" size={40} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <StatusBar style="dark" backgroundColor='cadetblue' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    paddingHorizontal: 10,
    // marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: "cadetblue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_titulo: {
    fontSize: 30,
  },
  lista: {
    // marginTop: 20,
    // paddingBottom: 10,
    marginHorizontal: 10,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row'
  },
  item_foto: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  item_conteudo: {
    justifyContent: "space-between"
  },
  item_botoes: {
    width: "84%",
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  item_botao_adicionar: {
    marginRight: 5,
  },
  item_texto: {
    flexWrap: 'wrap',
    fontSize: 20
  }
});
