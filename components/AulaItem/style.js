import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerGeral: {
        flex: 1,
        paddingVertical: 20,
        alignItems: "center"
    },
    containerAula: {
        height: 150,
        width: "85%",
        backgroundColor: "#F6A75D",
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 5, height: 7 }, 
        shadowOpacity: 0.4, 
    },
    containerTitulo: {
        display: 'flex', 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    tituloAula: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonText: {
        color: "#FF0000"
    },
    descricaoAula: {
        color: "#fff"
    },


})

export default style