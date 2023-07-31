import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
const { width } = Dimensions.get("screen")

const DrawHeader = () => {
    return (
        <View>
            <TouchableOpacity>
                <Ionicons name='color-palette-outline' size={width * 0.1} />
            </TouchableOpacity>
        </View>
    )
}

export default DrawHeader

const styles = StyleSheet.create({})