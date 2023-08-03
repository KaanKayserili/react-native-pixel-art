import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import ColorPicker from 'react-native-wheel-color-picker';
import { TextInput } from 'react-native';

const { width, height } = Dimensions.get("screen");

export const ColorPickerComponent = ({ color, setColor, setOpenColorPicker }) => {
  const [newColor, setNewColor] = useState(color);

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
        onColorChange={(newColor) => setNewColor(newColor)}
        style={{ width: width * 0.6 }}
      />
      <Text>{newColor}</Text>

      <TouchableOpacity onPress={() => { setColor(newColor); setOpenColorPicker(false); }} style={
        { paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "white", borderRadius: 20, borderWidth: 2, borderColor: "black", marginTop: 20 }
      }>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Okay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
