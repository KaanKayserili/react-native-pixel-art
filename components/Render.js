import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import ViewShot from 'react-native-view-shot';

const { width, height } = Dimensions.get("screen");

const Render = ({ colors, setColors, color, setColor, colorPicker, columnRow, viewRef, setColorPicker }) => {



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

  const renderCell = (row, col) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, { width: ((width / columnRow) - 2), height: ((width / columnRow) - 2), backgroundColor: colors[row][col] }]}
        onPress={() => handleCellPress(row, col)}>
      </TouchableOpacity>
    );
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
    <ViewShot style={{ marginTop: ((height / 2) - (width * 0.5) - (width * 0.14) - (height * 0.04)) - (height * 0.0075), }} ref={viewRef}>{renderMatrix()}</ViewShot>
  )
}

export default Render;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: (10 / 6),
    justifyContent: 'center',
    alignItems: 'center',
  },
})