import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, FlatList, Text, Image } from 'react-native';
import axios from 'axios';
import AulaItem from '../AulaItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';


export default function AulasContainer() {
  const [aulas, setAulas] = useState([]);

  const { token, id } = useContext(AuthContext);


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
        console.log(aulas)

      } catch (err) {
        console.log("Erro ao fazer o get", err)
      }
    }
    exibirAula()

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
            <Image source={require('../../assets/logo2.jpg')} style={{ height: 250, width: 250 }} />
            <Text style={{ textAlign: "center" }}>Não há aulas disponíveis.</Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
