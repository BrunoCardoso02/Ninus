import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },

    voltar: {
        fontSize: 40
    },

    title: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    },

    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 30
    },

    fotoPerfil: {
        height: 250,
        width: 250,
        marginTop: 30,
        alignSelf:"center"
    },

    containerInput: {
        width: "95%",
        height: "100%",
        alignSelf: "center"
    },

    input: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#F4A460",
        paddingVertical: 12,
        marginHorizontal: 15,
        marginTop: 20
    },

    btnSalvar: {
        backgroundColor: "#F4A460",
        width: "60%",
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 8,
        paddingVertical: 10
    }
})

export default styles;