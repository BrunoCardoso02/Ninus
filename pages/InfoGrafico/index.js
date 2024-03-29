import { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from './style';
import api from '../../api/api';
import { AuthContext } from '../../Context/AuthContext';
import TabBar from '../../components/TabBar';


export default function Infografico() {
    const [aula, setAula] = useState([])
    const { token, id } = useContext(AuthContext);

    useEffect(() => {

        async function ExibirInfoGrafico() {
            try {
                const res = await api.get('/class/input', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    }
                });
    
                const dadosInfoGrafico = res.data._embedded.modelInputClassDetailsList.map(item => item);
                setAula(dadosInfoGrafico);
        
            } catch (err) {
                console.log( err);
            }
        }
    
        ExibirInfoGrafico();
    }, [aula]);

    return (

        <ImageBackground source={require('../../assets/background2.jpg')} style={styles.container}>
            <View style={styles.containertitulo}>
                <Text style={styles.titulo}>Infográfico</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerGeral}>
                    
                    {aula.map((item, index) => {
                        return (
                            <View key={index}>
                            <Text style={styles.tituloAula}>{item.class.className}</Text>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                style={styles.containerGrafico}
                            >
                                <View style={styles.containerGrafico}>
                                    <View style={styles.graficoTituloAula} >
                                        <Text style={styles.tituloRecurso}>Título da aula</Text>
                                        <Text style={styles.conteudoRecurso}>{item.axle} A GLOBALIZAÇÃO, CARACTERIZADA PELA INTERCONEXÃO E INTERDEPENDÊNCIA CRESCENTES ENTRE SOCIEDADES, ECONOMIAS E CULTURAS EM ESCALA MUNDIAL, É UM FENÔMENO COMPLEXO QUE TEM DEFINIDO AS DINÂMICAS CONTEMPORÂNEAS.</Text>
                                    </View>
                                    <View style={styles.graficoTurma}>
                                        <Text style={styles.tituloRecurso}>Turma</Text>
                                        <Text style={styles.conteudoRecurso}>{item.classroom}</Text>
                                    </View>
                                    <View style={styles.graficoTemaAula}>
                                        <Text style={styles.tituloRecurso}>Tema da aula</Text>
                                        <Text style={styles.conteudoRecurso}>{item.class_theme}</Text>
                                    </View>
                                    <View style={styles.graficoIdade}>
                                        <Text style={styles.tituloRecurso}>Idade dos alunos</Text>
                                        <Text style={styles.conteudoRecurso}>{item.age_group}</Text>
                                    </View>
                                    <View style={styles.graficoContextoDaAula}>
                                        <Text style={styles.tituloRecurso}>Contexto da Aula</Text>
                                        <Text style={styles.conteudoRecurso}>{item.fields_experience}</Text>
                                    </View>
                                    <View style={styles.graficoObjetivoDaAula}>
                                        <Text style={styles.tituloRecurso}>Objetivo da Aula</Text>
                                        <Text style={styles.conteudoRecurso}>{item.class_objective}</Text>
                                    </View>
                                    <View style={styles.graficoTempoDeAula}>
                                        <Text style={styles.tituloRecurso}>Tempo de aula</Text>
                                        <Text style={styles.conteudoRecurso}>{item.duration_in_minutes} minutos</Text>
                                    </View>
                                </View>
                            </ScrollView>
                            </View>
                        )
                    })}

                </View>
            </ScrollView>
            <TabBar/>
        </ImageBackground>
    )
}