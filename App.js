import 'react-native-gesture-handler';
import React from 'react';
import TelaAulas from './pages/CadastroAulas/index.js';
import CadastroUsuario from './pages/CadastroUsuario/index.js';
import TelaPerfil from './pages/Perfil/index.js';
import Infografico from './pages/InfoGrafico/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AuthProvider from './Context/AuthContext.js';
import TabBarProvider from './Context/TabBarContext.js';
import AulaProvider from './Context/AulaContext.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute", backgroundColor: '#F6A75D', bottom: 14, right: 14, left: 14, borderRadius: 5 },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen name="TelaAulas" component={TelaAulas} options={screenOptions} />
      <Tab.Screen name="TelaPerfil" component={TelaPerfil} options={screenOptions} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={DefaultTheme}>
        <AuthProvider>
          <AulaProvider>
            <TabBarProvider>
              <Stack.Navigator initialRouteName="TelaLogin" screenOptions={screenOptions}>
                <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
                <Stack.Screen name="TelaAulas" component={TabNavigator} />
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
