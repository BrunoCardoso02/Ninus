import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';


export default function CriarAulas() {


    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{ height: "100%" }}>
            <View style={{ flex: 1, padding: 5 }}>

                <View style={{ padding: 60, marginTop: "30%", alignItems: "center" }}>
                    <Text style={{ color: "orange", fontSize: 24, fontFamily: "Arial" }}>Crie aulas em um instante</Text>
                </View>
                <View>
                    <Text style={{ color: "orange", fontSize: 18, padding: 23 }}>Registrar</Text>
                    <TextInput style={{ marginTop: 10, marginHorizontal: 25, backgroundColor: "#F4A460", height: 45, width: "85%", borderRadius: 7,
                     shadowColor: '#000', shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.4, shadowRadius: 4, padding: 10, color: "#fff" }}
                        placeholder='Email'
                        placeholderTextColor={"#fff"} />

                    <TextInput style={{ marginTop: 45, marginHorizontal: 25, backgroundColor: "#F4A460", height: 45, width: "85%", borderRadius: 7, 
                    shadowColor: '#000', shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.4, shadowRadius: 4, padding: 10, color: "#fff" }}
                        placeholder='Email'
                        placeholderTextColor={"#fff"} />

                    <TextInput style={{ marginTop: 45, marginHorizontal: 25, backgroundColor: "#F4A460", height: 45, width: "85%", borderRadius: 7, 
                    shadowColor: '#000', shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.4, shadowRadius: 4, padding: 10, color: "#fff" }}
                        placeholder='confirmar senha'
                        placeholderTextColor={"#fff"} />

                    <TouchableOpacity style={{ backgroundColor: "#F4A460", marginTop: 40, alignItems: "center", width: "50%", marginHorizontal: "25%", 
                    height: 55, padding: "4%", borderRadius: 30 }}>
                        <Text style={{ color: "#fff", fontFamily: "Arial", fontSize: "20px" }}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
