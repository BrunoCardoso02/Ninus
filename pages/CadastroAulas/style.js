import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: width * 0.1,
      marginTop: height * 0.03,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: width * 0.08,
      fontWeight: 'bold',
    },
    infoContainer: {
      paddingHorizontal: width * 0.1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: height * 0.003,
      gap: width * 0.03,
      width: width * 0.95
    },
    infoText: {
      color: '#fff',
      fontSize: width * 0.05,
    },
    addButtonContainer: {
      padding: width * 0.08,
    },
    addButton: {
      opacity: 0.7,
    },
    addButtonIcon: {
      opacity: 0.7,
    },
    menu: {
      backgroundColor: '#F6A75D',
      marginTop: 10,
      width: width * 0.8,
      marginHorizontal: width * 0.10,
      borderRadius: 15,
      padding: width * 0.02,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
    titleMenu: {
      color: '#fff',
      fontSize: width * 0.08,
      marginTop: height * 0.01,
      textAlign: 'center',
    },
    label: {
      color: '#fff',
      fontSize: width * 0.04,
      marginTop: height * 0.05,
    },
    input: {
      backgroundColor: '#FFE7D0',
      height: width * 0.11,
      borderRadius: width * 0.01,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      width: width * 0.75,
      paddingHorizontal: 10,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: width * 0.05,
    },
    radioButtonInner: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#FFE7D0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButtonSelectedInner: {
      borderColor: '#FFE7D0',
    },
    radioButtonDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: '#FFE7D0',
    },
    radioButtonLabel: {
      fontSize: 16,
      color: '#fff',
      marginLeft: 8,
    },
    submitButton: {
      marginTop: height * 0.05,
      paddingVertical: width * 0.03,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: "#FFE7D0"
    },
    submitButtonText: {
      color: '#F6A75D',
      fontSize: width * 0.05,
      fontWeight: 'bold',
    },
    logo2: {
        width: width * 0.5,
        height: height * 0.3
    }
  
  });

  export default styles