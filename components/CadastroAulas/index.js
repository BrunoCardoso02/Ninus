import React, { useState } from 'react';
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
import aulas from '../../data/ListaAulas';
import AulaItem from '../AulaItem';


const { width, height } = Dimensions.get('window');


export default function TelaAulas() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [opcaoSelecionada, setopcaoSelecionada] = useState('');
  const [showNoClassesMessage, setShowNoClassesMessage] = useState(true);

  const controlarToggle = () => {
    setIsOpen(!isOpen);
  };

  const controlarValorInput = (text) => {
    setInputValue(text);
  };

  const controlarInputRadio = (option) => {
    setopcaoSelecionada(option);
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
              <View style={styles.menu}>
                <Text style={styles.titleMenu}>Crie suas aulas!</Text>
                <Text style={styles.label}>Qual é sua disciplina?</Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Faça um breve resumo sobre a aula:</Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>
                  Há algum aluno deficiente na sala?
                </Text>
                <View style={styles.radioButtonContainer}>
                  <RadioButton
                    label="Sim"
                    value="sim"
                    isSelected={opcaoSelecionada === 'sim'}
                    onSelect={controlarInputRadio}
                  />
                  <RadioButton
                    label="Não"
                    value="não"
                    isSelected={opcaoSelecionada === 'não'}
                    onSelect={controlarInputRadio}
                  />
                  <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Enviar</Text>
                  </TouchableOpacity>
                </View>

              </View>

            )}
            {showNoClassesMessage && !isOpen && aulas.length === 0 && (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require('../../assets/logo2.jpg')}
                  style={styles.logo2}
                />
              </View>
            )}
            {aulas.length > 0 && (
              <SafeAreaView>
                <ScrollView>
                  <FlatList
                    data={aulas}
                    renderItem={({ item }) => (
                      <AulaItem item={item} />
                    )} />
                </ScrollView>
              </SafeAreaView>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </ImageBackground>
  );
}


function RadioButton({ label, value, isSelected, onSelect }) {
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelect(value)}>
      <View
        style={[
          styles.radioButtonInner,
          isSelected && styles.radioButtonSelectedInner,
        ]}>
        {isSelected && <View style={styles.radioButtonDot} />}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}