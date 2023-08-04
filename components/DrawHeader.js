import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../utils/ThemeProvider'
import lightColors from '../assets/colors/lightColors'
import darkColors from '../assets/colors/darkColors'
const { width, height } = Dimensions.get("screen")

const DrawHeader = ({ navigation, setOpenColorPicker, handleSave, colorPicker, setOpenResize, setColorPicker, color }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setOpenColorPicker(true); setColorPicker(false); }} style={[styles.button, { backgroundColor: color }]}>
                <Ionicons name='color-palette-outline' size={width * 0.1} color={"#414141"} style={styles.buttonText} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setColorPicker(true); setOpenColorPicker(false); }} style={[styles.button, colorPicker === true ? { backgroundColor: color } : { backgroundColor: "white" }]}>
                <FontAwesome name='eyedropper' size={width * 0.1} color={"#414141"}
                    style={styles.buttonText} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave} style={styles.button}>
                <Ionicons name='download-outline' size={width * 0.1} color={"#414141"} style={styles.buttonText} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setOpenResize(true) }} style={styles.button}>
                <Ionicons name='resize-outline' size={width * 0.1} color={"#414141"} style={styles.buttonText} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("MainPage")} style={styles.button}>
                <Ionicons name='log-out-outline' size={width * 0.1} color={"#414141"} style={styles.buttonText} />
            </TouchableOpacity>
        </View>
    )
}

export default DrawHeader

const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: height * 0.04,
        paddingBottom: height * 0.0075,
        borderBottomColor: "#414141",
        borderBottomWidth: 2,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: width * 0.02,
        borderWidth: 2,
        borderRadius: 30,
    },
    buttonText: {
        borderColor: "#414141",
    },
})