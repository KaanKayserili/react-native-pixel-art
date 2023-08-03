import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import TextInputComponent from '../components/TextInputComponent';

const { width } = Dimensions.get("screen")

const MainPage = ({ navigation }) => {
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
                <Text style={styles.label}>Tuval Boyutu:</Text>
                <TextInputComponent set={setNumber} get={number} width={width * 0.7} keyboardType={"numeric"} />
            </View>

            <View style={{ marginTop: 40, marginLeft: width * 0.15 }}>
                <Text style={styles.label}>Arka Plan Rengi:</Text>
                <TextInputComponent set={setBgColor} get={bgColor} width={width * 0.7} keyboardType={"default"} />
            </View>


            <TouchableOpacity onPress={goDraw} style={styles.button}>
                <Text style={styles.buttonText}>Başla</Text>
            </TouchableOpacity>
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