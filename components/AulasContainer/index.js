import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, FlatList, Text, Image } from 'react-native';
import axios from 'axios';
import AulaItem from '../AulaItem';

export default function AulasContainer() {
  const [aulas, setAulas] = useState([]);
  const [temAula, setTemAula] = useState(false);


  //Fazendo um get dos dados 

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/v1/class/progress';

    axios.get(apiUrl)
      .then(response => {
        const dadosDaAPI = response.data;
        const aulasDaAPI = dadosDaAPI._embedded.classNinusDetailsList;
        setAulas(aulasDaAPI);

        setTemAula(aulasDaAPI.length > 0);
      })
      .catch(error => {
        alert('Erro na requisição GET:' + error);
      });
  }, []);

  //Deletando os dados

  const handleDelete = (itemId) => {
    axios.delete(`http://localhost:8080/ninus/api/v1/class/${itemId}`)
        .then(response => {
            alert('Item excluído com sucesso:' + response.data);
        })
        .catch(error => {
            alert('Erro ao excluir o item:' + error);
        });
      }

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
