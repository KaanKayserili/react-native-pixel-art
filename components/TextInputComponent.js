import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const TextInputComponent = ({ set, get, width, keyboardType }) => {
    return (
        <TextInput keyboardType={keyboardType}
            value={get} onChangeText={(get) => set(get)}
            style={[styles.input, { width: width }]} placeholderTextColor={"gray"} />
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        paddingVertical: 7.5,
        borderWidth: 2,
        borderColor: "#414141",
        fontSize: 20,
        fontWeight: "500",
        color: "#414141",
        borderRadius: 27.5,
        textAlign: "center",
    }
})