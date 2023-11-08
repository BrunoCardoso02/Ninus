import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, ScrollView, FlatList, Text, Image } from 'react-native';
import axios from 'axios';
import AulaItem from '../AulaItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';

export default function AulasContainer() {
  const [aulas, setAulas] = useState([]);
  const [temAula, setTemAula] = useState(false);
  const {token, id} = useContext(AuthContext)

  useEffect(() => {
    function exibirAula(){
      api.get(`/feed/class/progress/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          const dadosDaAPI = response.data.class_name;
          console.log(dadosDaAPI)
          setAulas(dadosDaAPI);
          setTemAula(aulasDaAPI.length > 0);

        })
        .catch(error => {
          alert('Erro na requisição GET:' + error);
          console.log("Erro ao fazer o get", error)
        });
    }
    exibirAula()

  }, []);

  //Deletando os dados

  /*const handleDelete = (itemId) => {
    axios.delete(`http://localhost:8080/ninus/api/v1/class/${itemId}`)
        .then(response => {
            alert('Item excluído com sucesso:' + response.data);
        })
        .catch(error => {
            alert('Erro ao excluir o item:' + error);
        });
      }*/

  return (
    <SafeAreaView>
      <ScrollView>
        {temAula ? (
          <FlatList
            data={aulas}
            renderItem={({ item }) => (
              <AulaItem item={item} onDeleteItem={handleDelete} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <>
            <Image source={require('../../assets/logo2.jpg')} style={{height: 250, width: 250}}/>
            <Text style={{textAlign: "center"}}>Não há aulas disponíveis.</Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
