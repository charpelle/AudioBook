import React from 'react'
import { TouchableOpacity, FlatList } from 'react-native'
import styled from 'styled-components';

import { images } from '../data/images';
import metrics from '../utils/metrics';

export default ImageList = ({ navigation }) => {
  return (
    <FlatList 
      data={images}
      horizontal
      keyExtractor={(i, t) => t.toString()}
      style={{ height: 146 }}
      contentContainerStyle={{ height: 146 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Book', { image: item.uri })}
        >
          <Image source={{ uri: item.uri }}/>
        </TouchableOpacity>
      )}
    />
  )
}


const Image = styled.Image`
  width: ${metrics.width * 0.3};
  height: ${metrics.height * 0.17};
  border-radius: 15px;
  margin: 10px;
`