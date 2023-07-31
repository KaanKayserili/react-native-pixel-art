import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native'

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />

            <TouchableOpacity onPress={() => navigation.navigate("Draw", { number: 5 })} style={{ marginTop: 50, }}>
                <Text style={{ textAlign: "center" }}>Git</Text>
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
    }
})