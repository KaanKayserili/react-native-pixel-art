import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import IconButton from './IconButton'
import { useTheme } from '../utils/ThemeProvider'
import darkColors from '../assets/colors/darkColors'
import lightColors from '../assets/colors/lightColors'
const { width, height } = Dimensions.get("screen")

const DrawHeader = ({ navigation, setOpenColorPicker, handleSave, setOpenResize, setColorPicker, color }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <View style={styles.container}>
            <IconButton type={"Ionicons"} name={'color-palette-outline'} onPress={() => { setOpenColorPicker(true); setColorPicker(false); }} theme={theme} size={width * 0.1} />
            <IconButton type={"FontAwesome"} name={'eyedropper'} onPress={() => { setColorPicker(true); setOpenColorPicker(false); }} theme={theme} size={width * 0.1} />
            <IconButton type={"Ionicons"} name={'download-outline'} onPress={handleSave} theme={theme} size={width * 0.1} />
            <IconButton type={"Ionicons"} name={'resize-outline'} onPress={() => { setOpenResize(true) }} theme={theme} size={width * 0.1} />
            <IconButton type={"Ionicons"} name={'log-out-outline'} onPress={() => navigation.navigate("MainPage")} theme={theme} size={width * 0.1} />
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
})