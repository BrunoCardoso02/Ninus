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

const Stack = createStackNavigator();
/*const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: '#F6A75D', borderRadius: 5 },
        activeTintColor: '#fff',
      }}
    >
      <Tab.Screen name="TelaAulas" component={TelaAulas} options={{ headerShown: false }} />
      <Tab.Screen name="TelaPerfil" component={TelaPerfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}


function AulasPerfilScreen(){
  return(
    <TabNavigator/>
  )
}*/

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabBarProvider>
        <Stack.Navigator initialRouteName="TelaLogin" headerMode="none">
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
         {/*<Stack.Screen name="TabNavigator" component={TabNavigator} />*/} 
          <Stack.Screen name="TelaAulas" component={TelaAulas} />
          <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
          <Stack.Screen name="TelaLogin" component={TelaLogin} />
          <Stack.Screen name="Infografico" component={Infografico} />
        </Stack.Navigator>
        </TabBarProvider>
      </AuthProvider>
    </NavigationContainer>

  );
}


