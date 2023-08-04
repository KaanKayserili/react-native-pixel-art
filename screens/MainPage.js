import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Header from '../components/Header';
import TextInputComponent from '../components/TextInputComponent';

import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';

import { useLanguage } from '../utils/LanguageProvider';
import { useTheme } from '../utils/ThemeProvider';
import ButtonComponent from '../components/ButtonComponent';

const { width } = Dimensions.get("screen");

const MainPage = ({ navigation }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const [number, setNumber] = useState(5);
    const [bgColor, setBgColor] = useState("#FFF");

    const goDraw = () => {
        if (number !== "" && bgColor !== "") {
            navigation.navigate("Draw", { number: parseInt(number), bgColor: bgColor });
        }
        else {
            alert("Yanlış veya eksik giriş yaptınız.")
        }
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={{ marginTop: 40, marginLeft: width * 0.15 }}>
                <Text style={styles.label}>{lingo.TuvalBoyutu}:</Text>
                <TextInputComponent set={setNumber} get={number} width={width * 0.7} keyboardType={"numeric"} />
            </View>

            <View style={{ marginTop: 40, marginLeft: width * 0.15 }}>
                <Text style={styles.label}>{lingo.ArkaPlanRengi}:</Text>
                <TextInputComponent set={setBgColor} get={bgColor} width={width * 0.7} keyboardType={"default"} />
            </View>

            <View style={{ marginLeft: width * 0.25 }}>
                <ButtonComponent text={lingo.Start} onPress={goDraw} width={width * 0.5} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: width }}>
                <ButtonComponent text={lingo.English} onPress={goDraw} width={width * 0.35} />

                <ButtonComponent text={lingo.Turkish} onPress={goDraw} width={width * 0.35} />
            </View>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#414141",
    },
})