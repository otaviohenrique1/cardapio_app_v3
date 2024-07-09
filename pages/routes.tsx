import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import Detalhes from './Detalhes';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cardapio"
          component={HomePage}
          options={{
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
            headerRight: () => (
              <TouchableOpacity>
                <IconMaterialCommunityIcons name="cart-variant" size={40} />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
