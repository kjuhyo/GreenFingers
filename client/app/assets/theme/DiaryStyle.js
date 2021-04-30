import styled from 'styled-components';

// 소제목('글작성', '사진선택')
export const SubHeadingText = styled.View`
  flex: 0.8;
  flex-direction: row;
  align-items: center;
`;

// 글 작성 영역
export const TextInputBox = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

// 사진 선택 영역
export const ImgSelectBox = styled.View`
  flex: ${props => props.flexHeight || 1.8};
  flex-direction: row;
  margin-bottom: ${props => props.marginBottom || '20px'};
`;

// 사진 촬영/선택 버튼
export const ImgSelectBtn = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// 선택한 사진 영역
export const SelectedImgBox = styled.View`
  flex: 1.7;
  flex-direction: row;
`;

// 선택한 사진
export const SelectedImg = styled.Image`
  border-radius: 10px;
  width: 60px;
  height: 60px;
  margin-right: 8px;
`;

// 완료 버튼
export const CompleteBtn = styled.TouchableOpacity`
  flex: ${props => props.flexHeight || 1};
  background-color: ${({theme}) => theme.colors.lightGreenButton};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

// 완료 버튼 텍스트
export const CompleteBtnText = styled.Text`
  color: ${({theme}) => theme.colors.darkGreen};
  font-weight: bold;
  font-size: 16px;
`;
