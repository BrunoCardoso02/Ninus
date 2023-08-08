import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '../TelaAulas/style'
 
export default function TelaAulas() {
  return (
    <ImageBackground source={require('../../assets/background2.jpg')} style={{flex: 1}}>
    <View style={styles.containerLayout}>
        <Text style={styles.titulo}>Aulas de Hoje</Text>
        <FontAwesome name='user-circle-o' size={38} color={"white"}></FontAwesome>
    </View>

    <View style={styles.containerPrincipal}>
        <AntDesign name='exclamationcircle' size={20} color={"#fff"}></AntDesign>
        <Text style={styles.textoInstrucao}>Crie suas aulas e nós te avaliaremos. Para saber a função do botão aperte e segure.</Text>
    </View>

    <View style={{padding: 35}}>
    <TouchableOpacity style={styles.botaoModal}>
        <AntDesign name='pluscircle' size={"40%"} style={{opacity: 0.7}} color={"white"}></AntDesign>
    </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}