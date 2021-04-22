// diary의 모달들에 사용되는 스타일

import styled from "styled-components";

// 피드 수정/삭제 모달 전체 컨테이너
export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

// 피드 수정/삭제 모달 박스
export const ModalBox = styled.View`
  flex: 1;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 300px;
  margin-bottom: 300px;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

// 피드 수정/삭제 모달 헤더
export const ModalHeader = styled.View`
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 4px;
`;

// 모달 회색버튼
export const ModalButton1 = styled.TouchableOpacity`
  flex: 1;
  /* background-color: #ededed; */
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 2px;
`;
