import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from '../Botao/style'

export default function AbBotao(props){
    const {titulo} = props;
    return(
        <TouchableOpacity style={styles.botaoStyle}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}