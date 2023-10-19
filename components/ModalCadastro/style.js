import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
})

export default styles