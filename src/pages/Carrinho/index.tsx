import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import styles from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStaticParamList } from '../routes';

type Props = NativeStackScreenProps<RootStaticParamList, 'Carrinho'>;

export default function Carrinho({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <StatusBar style="dark" backgroundColor='cadetblue' />
    </View>
  );
}
