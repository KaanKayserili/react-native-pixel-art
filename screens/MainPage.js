import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50  ,
    }
})