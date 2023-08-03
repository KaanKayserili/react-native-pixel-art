import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { Saving } from "../utils/Saving"

import { ColorPickerComponent } from '../components/ColorPicker';
import DrawHeader from '../components/DrawHeader';
import Resize from '../components/Resize';
import Render from '../components/Render';

const { width, height } = Dimensions.get("screen");

export const Draw = ({ navigation, route }) => {
  const { number, bgColor } = route.params;

  const [columnRow, setColumnRow] = useState(number);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [download, setDownload] = useState(false);
  const [openResize, setOpenResize] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useState(bgColor);
  const [colors, setColors] = useState(Array.from({ length: columnRow * columnRow }, () => Array(columnRow * columnRow).fill(bgColor)));

  const viewRef = useRef();

  useEffect(() => {
    if (download === true) {
      Saving({ viewRef });
      setDownload(false);
    }
  }, [download]);

  const handleSave = () => {
    setDownload(true);
  }

  return (
    <View style={styles.container}>

      <Modal visible={openColorPicker} transparent={true} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => setOpenColorPicker(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <ColorPickerComponent color={color} setColor={setColor} setOpenColorPicker={setOpenColorPicker} />
      </Modal>

      <Modal visible={openResize} transparent={true} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => setOpenResize(false)}>
          <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
        </TouchableWithoutFeedback>
        <Resize number={columnRow} setNumber={setColumnRow} setOpenResize={setOpenResize} width={width} height={height} />
      </Modal>

      <DrawHeader navigation={navigation} setOpenColorPicker={setOpenColorPicker} handleSave={handleSave} colorPicker={colorPicker}
        setColorPicker={setColorPicker} setColumnRow={setColumnRow} setOpenResize={setOpenResize} color={color} />

      <Render colors={colors} setColors={setColors} color={color} setColor={setColor} colorPicker={colorPicker}
        columnRow={columnRow} viewRef={viewRef} setColorPicker={setColorPicker} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
  },
})

