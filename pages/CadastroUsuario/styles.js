import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5 
    },
    containerTitulo: {
        padding: 30,
        marginTop: "37%", 
        alignItems: "center" 
    },
    textoSaudacoes: {
      color: "orange", 
      fontSize: 24, 
    },
    textoTitulo: {
      color: "orange", 
      fontSize: 18, 
      padding: 23 
    },
    containerFormulario: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 50,
    },
    containerCheckbox: {
      display: "flex",
      flexDirection: "row",
      gap: 10
    },
    checkBox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: "#F4A460", 
      marginHorizontal: 5
    },
    checkBoxOptions: {
      color: "#F4A460", 
      fontWeight: 'bold'
    },
    linkToSignIn: {
      marginHorizontal: 30,
      marginTop: 20,
      color: "#F4A460"
    },
    textLinkToSignIn: {
      color: "#F4A460",
      textDecorationLine: 'underline',
      fontSize: 16, 
    }
})

export default styles