import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },
    conteudo: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? "20%" : "10%",
        width: "100%",
        height: 100,
        alignItems: "center",
    },
    titulo: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center"
    },
    fotoPerfil: {
        height: 200,
        width: 200,
        marginTop: 90
    },
    saudacoes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textoSaudacoes: {
       color: "#4F4F4F",
       fontSize: 24,
       marginTop: 20,
    },
    iconEdit: {
        marginTop: 15,
        marginLeft: 1
    },
    textoSubTitulo: {
        fontSize: 18,
        marginTop: 10,
        color: "grey"
    },
    containerLogout: {
        display: "flex",
        flexDirection: "row",
        
    },
    iconLogout: {
        marginTop: 18,
        marginLeft: 5
    },
    textoLogout: {
        color: "red",
        marginTop: Platform.OS === "ios" ? 20 : 15,
        fontSize: 20,
        fontWeight: "semibold",
    },
    modalEditar: {
        backgroundColor: "#F4A460",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: Platform.OS === "ios" ? 250 : 320,
    },
    input: {
        backgroundColor: '#FFE7D0',
        height: 50,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        width:300,
        paddingHorizontal: 10,
        marginBottom: 10
      },
    botaoEditar: {
        backgroundColor: "#FFE7D0",
        alignItems: "center",
        width: 200,
        marginHorizontal: Platform.OS === "ios" ? "18%" : "18%",
        height: 50,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
    textoBotaoEditar: {
        fontSize: 20,
        color: "#F4A460",
        fontWeight: "bold",
        marginTop: Platform.OS === "ios" ? 12 : 10,
    },
    botaoDeletarConta: {
        marginTop: Platform.OS === "ios" ? "48%" : "34%",
        width: Platform.OS === "ios" ? "80%" : "80%",
        alignItems: "center",
        height: Platform.OS === "ios" ? 50 : 40,
        backgroundColor: "#F4A460",
        justifyContent: "center",
        borderRadius: Platform.OS === "ios" ? 20 : 10,

    },
    modalDeletar: {
        backgroundColor: "#F4A460"
    },
    modalTextoDeletar: {
        color: "#fff",
        fontSize: 16
    },
    textoDeletarConta: {
        color: "red",
        fontSize: 20,
    },
    botaoTextoCancelarDelete: {
        color: "blue",
        fontWeight: 400
    },
    botaoTextoDeletarConta: {
        color: "red",
        fontWeight: 400
    },

})
export default style