import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from '../Botao/style'

export default function AbBotao({titulo, onPress}){

    return(
        <TouchableOpacity style={styles.botaoStyle} onPress={onPress}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}