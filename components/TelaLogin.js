import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';


export default function TelaLogin() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={{height: "100%"}}>
    <View style={{flex: 1}}>
        <View style={{padding: 60, marginTop: "40%", alignItems: "center"}}>
            <Text style={{color: "orange", fontSize: 40, fontFamily: "Arial"}}>Olá</Text>
            <Text style={{color: "orange", fontSize: 20, fontFamily: "Arial"}}>Seja bem-vindo Ninus!</Text>
        </View>
        <View style={{padding: 25,}}>
            <Text style={{color: "orange", fontSize: 22, fontFamily: "Arial", fontWeight: "bold"}}>Entrar</Text>
            <TextInput style={{marginTop: 25, backgroundColor: "#F4A460", height: 45, borderRadius: 7, shadowColor: '#000', shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.4, shadowRadius: 4, padding: 10, color: "white"}}
             placeholder='Email'
             placeholderTextColor={"white"}/>
            <TextInput style={{marginTop: 40, backgroundColor: "#F4A460", height: 45, borderRadius: 7, shadowColor: '#000', shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.4, shadowRadius: 4, padding: 10, color: "white"}}
            placeholder='Senha'
            placeholderTextColor={"white"}/>
            <TouchableOpacity style={{ backgroundColor: "#F4A460", marginTop: 40, alignItems: "center", width: "50%", marginHorizontal: "25%", height: 55, padding: "4%", borderRadius: 30}}>
                <Text style={{color: "white", fontFamily: "Arial", fontSize: 20}}>Login</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 20, textAlign: "center", color: "orange", textDecorationLine: "underline"}}>Esqueci a senha</Text>
            <View style={{marginTop: 40, display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Image source={require('../assets/yvbOx5two0W.png')} style={{height: 50, width: 50}}></Image>
                <Image source={require('../assets/600px-Instagram_icon.png')} style={{height: 50, width: 50}}></Image>
                <Image source={require('../assets/google-logo.png')} style={{height: 50, width: 50}}></Image>
            </View>
            <Text style={{color: "white", fontFamily: "Arial", padding: 30, textAlign: "center"}}>Não tem uma conta? <Text style={{textDecorationLine: "underline", color: "#FF4500"}}>Crie aqui</Text></Text>
        </View>
    </View>
    </ImageBackground>
  )
}
