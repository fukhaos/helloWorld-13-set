import { StyleSheet } from "react-native";

export const theme = {
    tint: 'blue',
    background: 'white',
    text: 'black',
    button: 'purple',
}


export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: theme.tint
    },
    button: {
        backgroundColor: theme.button,
        height: 50,
        width: '90%',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    button_disabled: {
        backgroundColor: "gray",
        height: 50,
        width: '90%',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    button_title: {
        color: theme.background,
        fontSize: 18,
        fontWeight: "bold",
    },
    inputText: {
        borderColor: 'gray',
        width: '90%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        marginBottom: 20
    }
})


