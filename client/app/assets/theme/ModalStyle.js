// diary의 모달들에 사용되는 스타일

import styled from 'styled-components';

// 모달 전체 컨테이너
export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 모달 박스
export const ModalBox = styled.View`
  flex: ${props => props.flexHeight || 0.3};
  /* width: 250px; */
  width: ${props => props.modalWidth || '250px'};
  background-color: rgba(255, 255, 255, 0.9);
  padding: 16px;
  border-radius: 10px;
`;

// 모달 헤더
export const ModalHeader = styled.View`
  flex: ${props => props.flexHeight || 0.5};
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-end'};
  align-items: center;
  margin-bottom: 10px;
  margin-left: 4px;
`;

// 모달 컨텐트
export const ModalContent = styled.View`
  flex: ${props => props.flexHeight || 0.5};
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-end'};
  align-items: center;
  margin-bottom: 3px;
  margin-left: 4px;
`;

// 모달 버튼 박스
export const ModalButtonBox = styled.View`
  flex: ${props => props.flexHeight || 3};
  border-radius: ${props => props.borderRadius || 0};
  background-color: ${props => props.backgroundColor || 'white'};
  flex-direction: ${props => props.flexDirection || 'column'};
`;

// 모달 버튼
export const ModalButton = styled.TouchableOpacity`
  flex: ${props => props.flexHeight || 1};
  flex-direction: row;
  background-color: ${props => props.backgroundColor || '#F9F9F9'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
  border-radius: 10px;
  margin: 2px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Line = styled.View`
  height: 0.3px;
  background-color: #c4c4c4;
`;
