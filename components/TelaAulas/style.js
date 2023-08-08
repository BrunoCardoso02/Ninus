import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerLayout: {
        padding: 35, 
        marginTop: "10%", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    titulo: {
        color: "#fff", 
        fontSize: 25, 
        fontWeight: "bold"  
    },
    containerPrincipal: {
        marginHorizontal: 40, 
        display: "flex", 
        flexDirection: "row", 
        gap: 10
    },
    textoInstrucao: {
        color: "#fff", 
        fontSize: 18
    },
    containerModal: {
        padding: 35,
    },
    botaoModal: {
        opacity: 500  
    }
})

export default styles