import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

import TextInputComponent from './TextInputComponent';

const { width, height } = Dimensions.get("screen");

export const ColorPickerComponent = ({ color, setColor, setOpenColorPicker }) => {
  const [newColor, setNewColor] = useState(color);
  const [inputColor, setInputColor] = useState(color);

  const handleInputChange = (newValue) => {
    setInputColor(newValue);
  };

  const handlePickerChange = (newValue) => {
    setNewColor(newValue);
    setInputColor(newValue);
  };

  return (
    <View style={{
      flexDirection: "column", backgroundColor: "white", height: height * 0.6, width: width * 0.8, marginTop: height * 0.15,
      marginLeft: width * 0.1, alignItems: "center", justifyContent: "center", padding: width * 0.05, borderRadius: 20, borderWidth: 2, borderColor: "black"
    }}>
      <Text style={{ fontSize: height * 0.03, fontWeight: "bold" }}>Choose Color</Text>

      <ColorPicker
        color={newColor}
        thumbSize={height * 0.05}
        sliderSize={height * 0.05}
        gapSize={-height * 0.05}
        noSnap={true}
        discrete={false}
        sliderHidden={false}
        swatches={false}
        row={false}
        onColorChange={handlePickerChange}
        style={{ width: width * 0.6, marginBottom: height * 0.025 }}
      />

      <TextInputComponent set={setInputColor} get={inputColor} width={width * 0.4} keyboardType={"default"} />

      <View style={{ width: width * 0.8, flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => { setOpenColorPicker(false) }} style={
          { paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "white", borderRadius: 20, borderWidth: 2, borderColor: "red", marginTop: 20 }
        }>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setColor(inputColor); setOpenColorPicker(false); }} style={
          { paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "white", borderRadius: 20, borderWidth: 2, borderColor: "green", marginTop: 20 }
        }>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>Okay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
