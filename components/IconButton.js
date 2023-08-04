import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const IconButton = (onPress, type, name, size, theme) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: theme.Button, padding: size * 0.02, }]}>
            {type === "Ionicons" ?
                <Ionicons name={name} size={size} color={theme.Icon} style={styles.buttonText} />
                : <FontAwesome name={name} size={size} color={theme.Icon} style={styles.buttonText} />}
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 30,
    },
    buttonText: {
        borderColor: theme.Border,
    },
})