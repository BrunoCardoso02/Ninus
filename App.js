import 'react-native-gesture-handler';
import React from 'react';
import TelaAulas from './pages/CadastroAulas/index.js';
import CadastroUsuario from './pages/CadastroUsuario/index.js';
import TelaPerfil from './pages/Perfil/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLogin from './pages/TelaLogin/index.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { position: "absolute", backgroundColor: '#F6A75D', bottom: 14, right: 14, left: 14, borderRadius: 5 }, tabBarActiveTintColor: '#fff', }}>

      <Tab.Screen name="Tela aulas" component={TelaAulas} options={{ headerShown: false, }} />
      <Tab.Screen name="Tela Perfil" component={TelaPerfil} options={{ headerShown: false, }} />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroUsuario" headerMode="none">
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="TelaAulas" component={TelaAulas} />
        <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}


