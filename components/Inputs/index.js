import React from "react";
import {View, TextInput} from 'react-native';
import styles from "./styles";


export default function AbCampoTexto(props){
    return(
        <TextInput style={styles.inputStyle} placeholder={props.placeholder} placeholderTextColor={"#fff"} /> 
    )
}
