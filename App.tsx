import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from "react";
import api from './utils/api';

interface DataTypes {
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
    api.get("produtos/")
      .then((data) => {
        setData(data.data)
      })
      .catch((erro) => {
        console.error(erro);
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
