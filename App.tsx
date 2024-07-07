import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import api from './utils/api';
import axios from 'axios';

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
    fetch("http://192.168.0.200:8000/produtos/")
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
      })
      .catch((erro) => {
        console.error("erro 2 => ", erro);
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Lista</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.nome}</Text>}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
