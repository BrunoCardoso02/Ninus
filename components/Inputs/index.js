import React from "react";
import {View, TextInput} from 'react-native';
import styles from "./styles";


export default function AbCampoTexto({value, onChangeText, placeholder, criptografar}){
    return(
        <TextInput style={styles.inputStyle} placeholder={placeholder} value={value} onChangeText={onChangeText} placeholderTextColor={"#fff"} secureTextEntry={criptografar} /> 
    )
}
