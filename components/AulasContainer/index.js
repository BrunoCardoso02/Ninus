import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ImageBackground } from 'react-native';
import axios from 'axios';
import AulaItem from '../AulaItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import { Modal, Portal, Button, Provider as PaperProvider } from 'react-native-paper';
import { ModalContext } from '../../Context/ModalContext';
import styles from './style';

export default function AulasContainer() {
  const [aulas, setAulas] = useState([]);
  const { token, id } = useContext(AuthContext);

  const { visible, setVisible } = useContext(ModalContext);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: '#F4A460', height: 100, margin: 10, width: "70%", alignItems: "center" };

  useEffect(() => {
    async function exibirAula() {
      try {
        const res = await api.get(`/feed/class/progress/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const dadosDaAPI = res.data;
        setAulas(dadosDaAPI);
        console.log(aulas);
      } catch (err) {
        console.log("Erro ao fazer o get", err);
      }
    }
    exibirAula();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {aulas.length !== 0 ? (
          aulas.map((item, index) => (
            <AulaItem key={index} item={item} />
          ))
        ) : (
          <>
            <ImageBackground source={require('../../assets/logo2.jpg')} style={{ height: 250, width: 250 }}>
              <Text style={{ textAlign: "center", color: 'white' }}>Não há aulas disponíveis.</Text>
            </ImageBackground>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
