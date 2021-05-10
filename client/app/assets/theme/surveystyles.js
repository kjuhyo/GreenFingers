import styled from 'styled-components';
import theme from './index';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  StyleProvider,
  Button,
} from 'native-base';

import {View, Text, StyleSheet, Image, PickerIOSComponent} from 'react-native';

// 추천탭에서 사용하는 것들

export const SurveyButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.darkGreen};
  height: 60%;
  width: 100px;
  justify-content: center;
  border-radius: 10px;
`;

export const SurveyButtonText = styled(Text)`
  color: ${({theme}) => theme.colors.roomName};
  font-size: 20px;
`;

export const SurveyQText = styled(Text)`
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  justify-content: center;
  align-self: flex-start;
`;

export const AnsButton = styled(Button)`
  width: 100%;
  background-color: #efefef;
  border-radius: 10px;
  height: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 25px;
`;

export const AnsText = styled(Text)`
  font-size: 17px;
  align-self: center;
  width: 100%;
  text-align: center;
  color: #333333;
`;
