import React from 'react';
import { Dimensions } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DrawHeader from '../components/DrawHeader';
const { width } = Dimensions.get("screen")
const Draw = () => {
  const numRows = 5; // Değişken olarak istediğiniz sayıyı girebilirsiniz
  const numColumns = 5; // Değişken olarak istediğiniz sayıyı girebilirsiniz

  const renderCell = (row, col) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, { width: ((width / numRows) - 2), height: ((width / numRows) - 2) }]}
        onPress={() => handleCellPress(row, col)}>
      </TouchableOpacity>
    );
  };

  const handleCellPress = (row, col) => {
    alert(`Tıklanan hücre: (${row}, ${col})`);
  };

  const renderMatrix = () => {
    const matrix = [];
    for (let row = 0; row < numRows; row++) {
      const rowCells = [];
      for (let col = 0; col < numColumns; col++) {
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
      <DrawHeader />
      {renderMatrix()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red"
  },
});

export default Draw;
