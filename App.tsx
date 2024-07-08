import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
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
      <Text style={styles.titulo}>Lista</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image
                style={styles.foto}
                source={{ uri: item.foto }}
              />
              <View style={styles.item_conteudo}>
                <View>
                  <Text style={styles.item_texto}>{item.nome}</Text>
                  <Text style={styles.item_texto}>R$ {item.preco.toString().replace(".", ",")}</Text>
                </View>
                <View style={styles.item_botoes}>
                  <TouchableOpacity>
                    <Text>Carrinho</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }
        }
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
    marginEnd: 20,
    marginHorizontal: 10,
  },
  titulo: {
    fontSize: 30,
  },
  item: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  item_conteudo: {
    justifyContent: "space-between"
  },
  item_botoes: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  item_texto: {
    flexWrap: 'wrap',
    fontSize: 20
  }
});
