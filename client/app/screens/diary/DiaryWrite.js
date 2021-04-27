// react
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  _ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';

// style
import styled from 'styled-components';
import {Icon} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


// 소제목('사진선택', '글작성')
const SubHeadingText = styled.View`
  flex: 0.8;
  justify-content: center;
`;

// 이미지 선택 영역
const ImageSelect = styled.TouchableOpacity`
  flex: 3;
  border: 1px solid #cccccc;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// 글 작성 영역
const TextInputBox = styled.TextInput`
  flex: 3;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
`;

// 완료 버튼
const CompleteBtn = styled.TouchableOpacity`
  flex: 0.8;
  background-color: ${({theme}) => theme.colors.lightGreenButton};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

// 완료 버튼 텍스트
const CompleteBtnText = styled.Text`
  color: ${({theme}) => theme.colors.darkGreen};
  font-weight: bold;
  font-size: 16px;
`;

export function DiaryWriteScreen({navigation}) {
  return (
    <ScrollView>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <SubHeadingText>
          <Text style={{fontWeight: 'bold'}}>사진선택</Text>
        </SubHeadingText>
        <ImageSelect>
          <Icon
            type="AntDesign"
            name="pluscircleo"
            style={{fontSize: 30, color: '#CCCCCC'}}
          />
        </ImageSelect>
        <SubHeadingText>
          <Text style={{fontWeight: 'bold'}}>글 작성</Text>
        </SubHeadingText>
        <TextInputBox />
        <CompleteBtn>
          <CompleteBtnText>완료</CompleteBtnText>
        </CompleteBtn>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {height: hp('85%'), padding: 30},
});
