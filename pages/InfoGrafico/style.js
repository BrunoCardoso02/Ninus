import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: "100%",
        alignItems: "center",
        padding: 5
    },
    containertitulo:{
        marginTop: "30%",
    },
    titulo: {
        fontWeight: "600",
        fontSize: 40,
        color: "#fff",
        marginBottom: "10%"
    },
    containerGeral: {
        paddingBottom: 50
    },
    tituloAula: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    containerGrafico: {
        position: "relative",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
    tituloRecurso: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 20
    },
    conteudoRecurso: {
        color: "#fff",
        fontSize: 15,
    },
    graficoTituloAula: {
        width: 250,
        height: 400,
        backgroundColor: "#6A5ACD",
        borderRadius: 25,
        padding: 20
    },
    graficoTurma: {
        width: 250,
        height: 400,
        backgroundColor: "#00FF00",
        borderRadius: 25,
        padding: 20
    },
    graficoTemaAula: {
        width: 250,
        height: 400,
        backgroundColor: "#FF4500",
        borderRadius: 25,
        padding: 20
    },
    graficoIdade: {
        width: 250,
        height: 400,
        backgroundColor: "#00BFFF",
        borderRadius: 25,
        padding: 20
    },
    graficoContextoDaAula: {
        width: 250,
        height: 400,
        backgroundColor: "#FF69B4",
        borderRadius: 25,
        padding: 20
    },
    graficoObjetivoDaAula: {
        width: 250,
        height: 400,
        backgroundColor: "#008B8B",
        borderRadius: 25,
        padding: 20
    },
    graficoTempoDeAula: {
        width: 250,
        height: 400,
        backgroundColor: "#D8BFD8",
        borderRadius: 25,
        padding: 20
    },

})

export default styles;