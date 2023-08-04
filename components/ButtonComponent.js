import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ onPress, text, theme}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{lingo.Start}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 7.5,
        backgroundColor: "white",
        borderRadius: 27.5,
        borderWidth: 2,
        borderColor: "#414141",
        marginTop: 20,
        width: width * 0.6,
        marginLeft: width * 0.2,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 22,
        color: "#414141"
    },
})