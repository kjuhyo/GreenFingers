import styled from 'styled-components';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Container, Icon, Button, Content} from 'native-base';

export const Cardback = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 5%;
  margin-bottom: 9%;
  border-radius: 10px;
  padding: 5%;
`;
export const Plantchip = styled.View`
  border-radius: 5px;
  padding: 5%;
`;

export const Littlechip = styled.View`
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 1px;
  padding-left: 1px;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin-left: 5px;
`;
export const LittleMenu = styled.TouchableOpacity`
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 1px;
  padding-left: 1px;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: rgba(0, 100, 100, 0.05);
  flex-direction: row;
`;

// 모달 버튼 박스
export const ModalButtonBox = styled.View`
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background};
`;

// 모달 왼쪽 버튼
export const ModalButton = styled.TouchableOpacity`
  flex: 1;
  border-radius: 10px;
  align-items: center;
  background-color: #f44336;
  margin: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

// 모달 오른쪽 버튼
export const ModalButton1 = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f9f8f3;
`;
