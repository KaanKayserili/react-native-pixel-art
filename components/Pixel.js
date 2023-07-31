import React from 'react'
import { Text } from 'react-native';
import { TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen")

const Pixel = ({ row, col, color, key, onPress }) => {
  return (
    <TouchableOpacity style={{ height: ((width / row) - 20), width: ((width / col) - 20), backgroundColor: color, margin: 10, }}>
    </TouchableOpacity>
  )
}

export default Pixel;