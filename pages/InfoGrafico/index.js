import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from './style';

export default function Infografico() {
    return(
        <ImageBackground source={require('../../assets/background2.jpg')} style={styles.container}>  
            <ScrollView>
                <View>
                    <Text style={styles.title}>Passo a passo</Text>
                </View>

                <View style={styles.containerTitle}>
                    <View style={styles.containerTexto}>
                        <Text>Title Here</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={styles.containerTitle}>
                    <View style={styles.containerTexto}>
                        <Text>Title Here</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={styles.containerTitle}>
                    <View style={styles.containerTexto}>
                        <Text>Title Here</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={styles.containerTitle}>
                    <View style={styles.containerTexto}>
                        <Text>Title Here</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>
                
            </ScrollView>
        </ImageBackground>
    )
}