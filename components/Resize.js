import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInputComponent from "../components/TextInputComponent";

const Resize = ({ number, setNumber, setOpenResize, width, height }) => {
  const [newSize, setNewSize] = useState(number);
  return (
    <View style={{
      flexDirection: "column", backgroundColor: "white", height: height * 0.3, width: width * 0.8, marginTop: ((height * 0.35) - (width * 0.05) - 2),
      marginLeft: width * 0.1, alignItems: "center", justifyContent: "center", padding: width * 0.05, borderRadius: 20, borderWidth: 2, borderColor: "black"
    }}>
      <Text style={{ fontSize: height * 0.03, fontWeight: "bold" }}>Resize</Text>

      <TextInputComponent set={setNewSize} get={newSize} width={width * 0.7} keyboardType={"numeric"} />

      <TouchableOpacity onPress={() => { setNumber(newSize); setOpenResize(false); }} style={
        { paddingVertical: 5, paddingHorizontal: 15, backgroundColor: "white", borderRadius: 20, borderWidth: 2, borderColor: "black", marginTop: 20 }
      }>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Okay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Resize

const styles = StyleSheet.create({})