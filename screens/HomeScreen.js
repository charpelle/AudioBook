import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList } from 'react-native'
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import ImageList from '../components/ImageList';
import colors from '../utils/colors';
import metrics from '../utils/metrics';
import { images } from '../data/images';



export default class HomeScreen extends Component {
  render() {
    return (
     <ScrollView style={[{ flex: 1, backgroundColor: '#303030' }]}>
      <Logo>
        <AntDesign name="menuunfold" size={20} color="white" />
      </Logo>
       <HeadingText>My Library</HeadingText>
       <SubView>
         <View>
          <SubHeaderText>Purchases</SubHeaderText>
          <SubTotalText>9 Total</SubTotalText>
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
            <SubButton style={{ backgroundColor: 'green', marginRight: 20 }}>
              <SubButtonText>New</SubButtonText>
            </SubButton>
          </Wrapper>
          <ImageView style={{ marginTop: 30 }}>
            <ImageList navigation={this.props.navigation} />
          </ImageView>
       </AudioBook>

     </ScrollView>
    )
  }
}

const Container = styled.View`
  flex: 1;
  background: ${colors.background}
`

const Logo = styled.View`
  position: absolute;
  top: 40;
  right: 20
`

const HeadingText = styled.Text`
  color: white;
  font-size: 30px;
  margin-top: ${metrics.height * 0.1};
  margin-left: ${metrics.width * 0.05};
  font-weight: bold;
`

const SubView = styled.View`
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
  margin-left: ${metrics.width * 0.05};
  /* align-items: center; */
`

const SubHeaderText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;

`

const SubTotalText = styled.Text`
  color: ${colors.grey};
  font-size: 17px;
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
  margin-left: ${metrics.width * 0.05};
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
  margin-top: ${metrics.height * 0.06};
`

const AudioBookHeaderText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: ${metrics.height * 0.03};
  margin-left: ${metrics.width * 0.08};
`

const TotalText = styled.Text`
  color: ${colors.grey};
  font-size: 17px;
  margin-left: ${metrics.width * 0.08};
`