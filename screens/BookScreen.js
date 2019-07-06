import React from 'react'
import { View, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components';

import colors from '../utils/colors';
import metrics from '../utils/metrics';

const BookScreen = ({ navigation }) => {
  console.log('navigation', navigation)
  return (
    <Container> 
      <HeaderImage source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} />
      <Body>
        <TagContainer>
          <TagBody style={{ backgroundColor: colors.red }}>
            <TagText>Love</TagText>
          </TagBody>
          <TagBody style={{ backgroundColor: colors.green }}>
            <TagText>Humor</TagText>
          </TagBody>
        </TagContainer>
        <HeaderText>Keep smiling after a Photoshop's crash</HeaderText>
        <BodyText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </BodyText>
        <AuthorContainer>
          <RowStyle>
            <AuthorImage source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} />
            <View>
              <AuthorLabel>Author</AuthorLabel>
              <AuthorName>Lau Martinez</AuthorName>
            </View>
          </RowStyle>
          <RowStyle>
            <AuthorImage source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} />
            <View>
              <AuthorLabel>Author</AuthorLabel>
              <AuthorName>Lau Martinez</AuthorName>
            </View>
          </RowStyle>
        </AuthorContainer>
        <Divide />
        <RowStyle>
          <View>
            <Chapter>Chapters</Chapter>
            <ChapterText>Chapter 1</ChapterText>
            <ChapterTitle>How to supress the desire to die</ChapterTitle>
            <ChapterDuration>16 minutes</ChapterDuration>
          </View>
          <PlayButton>
            <Entypo name="controller-play" size={20} color="white" />
          </PlayButton>
        </RowStyle>
      </Body>
    </Container>
  )
}

export default BookScreen


const Container = styled.View`
  flex: 1;
  background: ${colors.background}
`

const HeaderImage = styled.Image`
  width: ${metrics.width};
  height: ${metrics.height * 0.4}
`

const Body = styled.ScrollView`
  background: ${colors.background};
  height: ${metrics.height * 0.65};
  width: ${metrics.width};
  border-top-right-radius: 30;
  border-top-left-radius: 30;
  position: absolute;
  top: ${metrics.height * 0.37}
`

const TagContainer = styled.View`
  
  flex-direction: row;
  width: ${metrics.width * 0.65};
  margin-left: ${metrics.width * 0.08};
  margin-top: ${metrics.height * 0.03};
  /* justify-content: space-between; */
`

const TagBody = styled.View`
  height: ${metrics.height * 0.04};
  width: ${metrics.width * 0.23};
  border-radius: 15;
  align-items: center;
  justify-content: center;
  margin-right: 5px
`

const TagText = styled.Text`
  color: white;
  font-size: 14;
`

const HeaderText = styled.Text`
  color: white;
  font-size: 25;
  margin-top: ${metrics.height * 0.04};
  margin-left: 20px;
  font-weight: bold;
`

const BodyText = styled.Text`
  color: white;
  font-size: 15;
  margin: ${metrics.height * 0.02}px 20px;
`

const AuthorContainer = styled.View`
background: ${colors.yellow};

  height: ${metrics.height * 0.1};
  margin-left: ${metrics.width * 0.04};
  margin-right: ${metrics.width * 0.04};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const RowStyle = styled.View`
  flex-direction: row;
`

const AuthorImage = styled.Image`
  width: ${metrics.width * 0.1};
  height: ${metrics.height * 0.1};
  border-radius: ${metrics.width * 0.1 / 2};
  margin-left: 5px;
  margin-right: 5px;
`

const AuthorLabel = styled.Text`
  color: ${colors.grey};
  font-weight: bold;
`

const AuthorName = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`

const Divide = styled.View`
  background: white;
  height: 1;
  width: ${metrics.width * 0.84};
  align-items: center;
`


const Chapter = styled.Text`
  color: white;
  font-size: 25;
  margin-left: ${metrics.width * 0.08};
  margin-top: ${metrics.height * 0.01};
  font-weight: bold;
`

const ChapterText = styled.Text`
  color: ${colors.yellow};
  font-size: 15;
  margin-left: ${metrics.width * 0.08};
  margin-top: ${metrics.height * 0.02};
  font-weight: bold;
`

const ChapterTitle = styled.Text`
  color: ${colors.white};
  font-size: 20;
  margin-left: ${metrics.width * 0.08};
  margin-top: ${metrics.height * 0.01};
  font-weight: bold;
  width: 70%
`

const ChapterDuration = styled.Text`
  color: grey;
  font-size: 15;
  margin-left: ${metrics.width * 0.08};
  margin-top: ${metrics.height * 0.01};
`

const PlayButton = styled.TouchableOpacity`
  background: ${colors.yellow};
  height: ${metrics.width * 0.10};
  width: ${metrics.width * 0.10};
  margin-top: ${metrics.height * 0.1};
  margin-right: 80px;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.width * 0.10 / 2}
`