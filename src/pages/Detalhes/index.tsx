import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import styles from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DataTypes } from '../../types/types';
import { RootStaticParamList } from '../routes';

const valoresIniciais: DataTypes = {
  id: '',
  nome: '',
  descricao: '',
  preco: 0.00,
  tipo: '',
  data_cadastro: new Date(),
  foto: './assets/icon.png'
};

type Props = NativeStackScreenProps<RootStaticParamList, 'Detalhes'>;

export default function Detalhes({ route }: Props) {
  const [data, setData] = useState<DataTypes>(valoresIniciais);

  const { id } = route.params;

  useEffect(() => {
    fetch(`http://10.0.2.2:8000/produtos/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
      .catch((erro) => {
        console.error("erro => ", erro);
      })
  }, [])

  return (
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={{ uri: data.foto }}
      />
      <Text>{data.nome}</Text>
      <Text>R$ {data.preco.toString().replace(".", ",")}</Text>
      <Text>{data.descricao}</Text>
      <StatusBar style="dark" backgroundColor='cadetblue' />
    </View>
  );
}
