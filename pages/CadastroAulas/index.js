import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AulaItem from '../../components/AulaItem';
import ModalCadastro from '../../components/ModalCadastro';
import axios from 'axios';
import AulasContainer from '../../components/AulasContainer';
import { NavigationContainer } from '@react-navigation/native';
                                                              

const { width, height } = Dimensions.get('window');

export default function TelaAulas() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNoClassesMessage, setShowNoClassesMessage] = useState(true);

  const controlarToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ImageBackground
      source={require('../../assets/background2.jpg')}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aulas de Hoje</Text>
        <FontAwesome name="user-circle-o" size={width * 0.1} color="white" />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.infoContainer}>
          <AntDesign name="exclamationcircle" size={width * 0.05} color="white" />
          <Text style={styles.infoText}>
            Crie suas aulas e nós te avaliaremos.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={controlarToggle}>
          <View style={styles.addButton}>
            <AntDesign
              name="pluscircle"
              size={width * 0.15}
              style={styles.addButtonIcon}
              color="white"
            />
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View style={{ position: "relative", height: 480, width: "100%", }} >

            {isOpen && (
              <ModalCadastro />
            )}
            {showNoClassesMessage && !isOpen && (
              <View style={{ alignItems: "center", marginTop: 70 }}>
                <AulasContainer/>
              </View>
            )}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}