import React, {useState, useContext} from "react";
import { View, Text, TextInput } from 'react-native';
import style from "./style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 
import { TabBarContext } from "../../Context/TabBarContext";

export default function TabBar() {
    const {home, setHome, infoGrafico, setInfoGrafico, user, setUser} = useContext(TabBarContext);

    const navigation = useNavigation(); 

    function redirecionarHome(){
        navigation.navigate('TelaAulas');
        setHome(true);
        setInfoGrafico(false);
        setUser(false);
    };
    function redirecionarAoInfoGrafico(){
        navigation.navigate('Infografico');
        setHome(false);
        setInfoGrafico(true);
        setUser(false);
    };
    function redirecionarUser(){
        navigation.navigate('TelaPerfil');
        setHome(false);
        setInfoGrafico(false);
        setUser(true);
    };
    const homeIconName = home ? "home" : "home-outline";
    const infoGraficoIconName = infoGrafico ? "book" : "book-outline";
    const userIconName = user ? "account" : "account-outline";
    return (
        <View style={style.containerGeral}>
            <View style={[style.containerTab]}>
                
                <MaterialCommunityIcons name={homeIconName} color={"white"} size={35} onPress={redirecionarHome}/>
                <Ionicons name={infoGraficoIconName} color={"white"} size={35} onPress={redirecionarAoInfoGrafico}/>
                <MaterialCommunityIcons name={userIconName} color={"white"} size={35} onPress={redirecionarUser}/>
            </View>
        </View>
    )
}