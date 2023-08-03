import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
const { width } = Dimensions.get("screen")

const DrawHeader = ({ navigation, setOpenColorPicker, setDownload, colorPicker, setOpenResize, setColorPicker, color }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setOpenColorPicker(true); setColorPicker(false); }} style={styles.button}>
                <Ionicons name='color-palette-outline' size={width * 0.1} color={"#414141"} style={[styles.buttonText, { backgroundColor: color }]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setColorPicker(true); setOpenColorPicker(false); }} style={styles.button}>
                <FontAwesome name='eyedropper' size={width * 0.1} color={"#414141"}
                    style={[styles.buttonText, colorPicker === true ? { backgroundColor: color } : { backgroundColor: "white" }]} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setDownload(true); console.log("İndirildi") }} style={styles.button}>
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
        justifyContent: "space-around"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        padding: 10,
        borderWidth: 2,
        borderColor: "#414141",
        borderRadius: 50,
    },
})