import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: "100%",
        width: "100%",
        alignItems: "center",
    },

    containerTitle: {
        backgroundColor: "white",
        width: 300,
        height: 500,
        marginTop: 100,
        alignSelf: "center",
        borderRadius: "100%",
        alignItems: "center"
    },

    title: {
        marginTop: 60,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center"
    },

    containerTexto: {
        marginHorizontal: 30,
        marginTop: 30,
        alignItems: "center"
    },

    texto: {
        marginTop: 50
    }
})

export default styles;