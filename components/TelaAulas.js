import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function TelaAulas() {
  return (
    <ImageBackground source={require('../assets/background2.jpg')} style={{flex: 1}}>
    <View style={{padding: 35, marginTop: "10%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={{color: "#fff", fontSize: 25, fontWeight: "bold"}}>Aulas de Hoje</Text>
        <FontAwesome name='user-circle-o' size={38} color={"white"}></FontAwesome>
    </View>

    <View style={{marginHorizontal: 40, display: "flex", flexDirection: "row", gap: 10}}>
        <AntDesign name='exclamationcircle' size={20} color={"#fff"}></AntDesign>
        <Text style={{color: "#fff", fontSize: 18}}>Crie suas aulas e nós te avaliaremos. Para saber a função do botão aperte e segure.</Text>
    </View>

    <View style={{padding: 35}}>
    <TouchableOpacity style={{opacity: 500}}>
        <AntDesign name='pluscircle' size={"40%"} style={{opacity: 0.7}} color={"white"}></AntDesign>
    </TouchableOpacity>
    </View>

    </ImageBackground>
  )
}