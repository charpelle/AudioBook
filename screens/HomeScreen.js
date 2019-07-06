import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList } from 'react-native'
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import colors from '../utils/colors';
import metrics from '../utils/metrics';
import { images } from '../data/images';


const ImageList = ({ navigation }) => {
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
          <Image
            style={{ 
              width: 112,
              height: 138,
              borderradius: 15,
              margin: 3.75
            }}
            source={{ uri: item.uri }}
           />
        </TouchableOpacity>
      )}
    />
  )
}

export default class HomeScreen extends Component {
  render() {
    return (
     <ScrollView style={[{ flex: 1, backgroundColor: '#303030' }]}>
      <AntDesign name="menuunfold" size={30} color="white" />
       <HeadingText>My Library</HeadingText>
       <SubView>
         <View>
          <Sub1>Purchases</Sub1>
          <Sub2>9 Total</Sub2>
         </View>
         <SubButton>
           <SubButtonText>See Shop</SubButtonText>
         </SubButton>
       </SubView>

       <ImageView>
         <ImageList navigation={this.props.navigation} />
         <ImageList navigation={this.props.navigation} />
       </ImageView>

       <AudioBook>
          <Wrapper>
            <View>
              <AudioBookHeaderText>AudioBooks</AudioBookHeaderText>
              <TotalText>9 Total</TotalText>
            </View>
            <SubButton style={{ backgroundColor: 'green' }}>
              <SubButtonText>New</SubButtonText>
            </SubButton>
          </Wrapper>
          <ImageList navigation={this.props.navigation} />
       </AudioBook>

     </ScrollView>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.background}
`

const HeadingText = styled.Text`
  color: white;
  font-size: 30px;
  margin-top: 80px;
  margin-left: 20px;
  font-weight: bold;
`

const SubView = styled.View`
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`

const Sub1 = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;

`

const Sub2 = styled.Text`
  color: ${colors.grey};
  font-size: 20px;
`

const SubButton = styled.View`
  background: ${colors.yellow};
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 20;
`

const SubButtonText = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`

const ImageView = styled.View`
  height: ${metrics.height * 0.37};
  width: ${metrics.width};
`

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ImagePic = styled.Image`
`

const AudioBook = styled.View`
  height: ${metrics.height * 0.37};
  width: ${metrics.width};
  background-color: ${colors.yellow};
  border-top-right-radius: 30;
  border-top-left-radius: 30;
  margin-top: ${metrics.height * 0.04};
`

const AudioBookHeaderText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: ${metrics.height * 0.04};
  margin-left: ${metrics.width * 0.08};
`

const TotalText = styled.Text`
  color: ${colors.grey};
  font-size: 17px;
  margin-left: ${metrics.width * 0.08};
`