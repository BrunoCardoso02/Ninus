import 'react-native-gesture-handler';
import React from 'react';
import TelaAulas from './pages/CadastroAulas/index.js';
import CadastroUsuario from './pages/CadastroUsuario/index.js';
import TelaPerfil from './pages/Perfil/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLogin from './pages/TelaLogin/index.js';
import AuthProvider from './Context/AuthContext.js';
import Infografico from './pages/InfoGrafico/index.js';
import TabBarProvider from './Context/TabBarContext.js';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import AulaProvider from './Context/AulaContext.js';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AuthProvider>
          <AulaProvider>
          <TabBarProvider>
            <Stack.Navigator initialRouteName="TelaLogin" screenOptions={screenOptions}>
              <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
              <Stack.Screen name="TelaAulas" component={TelaAulas} />
              <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
              <Stack.Screen name="TelaLogin" component={TelaLogin} />
              <Stack.Screen name="Infografico" component={Infografico} />
            </Stack.Navigator>
          </TabBarProvider>
          </AulaProvider>
        </AuthProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
