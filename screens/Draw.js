import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { ColorPickerComponent } from '../components/ColorPicker';
import DrawHeader from '../components/DrawHeader';
import Resize from '../components/Resize';

const { width, height } = Dimensions.get("screen");


export const Draw = ({ navigation, route }) => {
  const { number, bgColor } = route.params;

  const [columnRow, setColumnRow] = useState(number);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [download, setDownload] = useState(false);
  const [openResize, setOpenResize] = useState(false);
  const [colorPicker, setColorPicker] = useState(bgColor);
  const [color, setColor] = useState(bgColor);
  const [colors, setColors] = useState(Array.from({ length: columnRow * columnRow }, () => Array(columnRow * columnRow).fill(bgColor)));

  const viewRef = useRef();

  useEffect(() => {
    if (download === true) {
      captureView();
    }
  }, [download])

  async function captureView() {
    try {
      const uri = await captureScreen({
        format: 'png',
        quality: 1,
      });
      console.log(uri);
      setDownload(false);
    } catch (error) {
      console.error('Resim yakalama hatası:', error);
      setDownload(false);
    }
  }

  const renderCell = (row, col) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, { width: ((width / columnRow) - 2), height: ((width / columnRow) - 2), backgroundColor: colors[row][col] }]}
        onPress={() => handleCellPress(row, col)}>
      </TouchableOpacity>
    );
  };

  const handleCellPress = (row, col) => {
    if (colorPicker === false) {
      const updatedMatrix = [...colors];
      updatedMatrix[row][col] = color;
      setColors(updatedMatrix);
    }
    else {
      const updatedColor = colors[row][col];
      setColor(updatedColor);
      setColorPicker(false);
    }
  };

  const renderMatrix = () => {
    const matrix = [];
    for (let row = 0; row < columnRow; row++) {
      const rowCells = [];
      for (let col = 0; col < columnRow; col++) {
        rowCells.push(renderCell(row, col));
      }
      matrix.push(
        <View key={row} style={styles.row}>
          {rowCells}
        </View>
      );
    }
    return matrix;
  };

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

      <DrawHeader navigation={navigation} setOpenColorPicker={setOpenColorPicker} setDownload={setDownload} colorPicker={colorPicker}
        setColorPicker={setColorPicker} setColumnRow={setColumnRow} setOpenResize={setOpenResize} color={color} />
      <View ref={viewRef} style={{ marginTop: 20, }}>{renderMatrix()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

