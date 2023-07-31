import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Pixel from "../components/Pixel";

const Draw = () => {
  const [data, setData] = useState(Array.from({ length: 16 }, (_, index) => index));
  
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.box}>
          {/* Burada kutucuğun içeriğini gösterebilirsiniz, örneğin: */}
          {/* <Text>{item}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Alt alta sıralamak için 'column' kullanıyoruz
    flexWrap: 'wrap',
  },
  box: {
    width: '20%', // 4 kutucuğu yan yana sıralamak için yüzde değeri kullanıyoruz
    aspectRatio: 1, // Kare şeklinde kutucuklar oluşturmak için aspectRatio kullanıyoruz
    backgroundColor: 'red',
    margin: 5, // Kutucuklar arasında boşluk bırakmak için margin ekliyoruz
  },
});

export default Draw;