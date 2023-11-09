import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    containerGeral: {
        flex: 0.1,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    containerTab: {
        position: "absolute",
        backgroundColor: "#F6A75D",
        width: "90%",
        height: 80,
        bottom: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "100%"
    }
})
export default style