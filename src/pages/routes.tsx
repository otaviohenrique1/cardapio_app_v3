import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import Detalhes from './Detalhes';
import Carrinho from './Carrinho';

export type RootStaticParamList = {
  Cardapio: undefined;
  Detalhes: { id: string };
  Carrinho: undefined;
}

const Stack = createNativeStackNavigator<RootStaticParamList>();

export default function AppRoutes() {
  const appBarStyle = {
    headerStyle: {
      backgroundColor: "cadetblue",
    },
    headerTitleStyle: {
      fontSize: 30,
      color: "black",
    },
    contentStyle: {
      backgroundColor: "white",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cardapio"
          component={HomePage}
          options={({ navigation }) => ({
            ...appBarStyle,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Carrinho')}
              >
                <IconMaterialCommunityIcons name="cart-variant" size={40} />
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            ...appBarStyle
          }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            ...appBarStyle
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
