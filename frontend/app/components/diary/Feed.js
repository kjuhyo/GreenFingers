import React, { useState } from "react";
import { Text, Image, Modal } from "react-native";

import { Icon } from "native-base";
import styled from "styled-components";
import DeleteModal from "./modal/DeleteModal";
import FeedSelectModal from "./modal/FeedSelectModal";
import CompleteModal from "./modal/CompleteModal";

const FeedBox = styled.View`
  flex: 1;
  margin-top: 30px;
  height: 400px;
  border-radius: 10px;
  margin: 10px;
  background-color: white;
  /* align-items: center; */
  /* justify-content: center; */
`;
const FeedBoxHeader = styled.TouchableOpacity`
  flex: 0.9;
  justify-content: center;
  align-items: flex-end;
  margin-right: 5px;
`;
const FeedImage = styled.View`
  flex: 5;
  /* background-color: yellow; */
`;
const FeedDate = styled.View`
  flex: 0.8;
  padding-top: 16px;
  padding-left: 16px;
  /* background-color: green; */
`;
const FeedContents = styled.View`
  flex: 1.5;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  /* background-color: grey; */
`;

// 텍스트 넘칠 경우 처리 해줄 예정
const FeedContentsText = styled.Text``;

export default function Feed(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [CompleteModalVisible, setCompleteModalVisible] = useState(false);
  return (
    <FeedBox>
      {/* 다이어리 수정,삭제 선택 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <FeedSelectModal
          setModalVisible={setModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          navigation={props.navigation}
        />
      </Modal>

      {/* 삭제 확인 모달창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          setModalVisible(!deleteModalVisible);
        }}
      >
        <DeleteModal
          setDeleteModalVisible={setDeleteModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>

      {/* 삭제 완료 모달창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={CompleteModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!CompleteModalVisible);
        }}
      >
        <CompleteModal
          content="삭제 되었습니다."
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>

      {/* 다이어리 */}
      <FeedBoxHeader onPress={() => setModalVisible(!modalVisible)}>
        <Icon type="MaterialCommunityIcons" name="dots-vertical" />
      </FeedBoxHeader>
      <FeedImage>
        <Image
          source={{
            uri:
              "http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg",
          }}
          style={{ flex: 1 }}
        />
      </FeedImage>
      <FeedDate>
        <Text>2021.04.06 16:15</Text>
      </FeedDate>
      <FeedContents>
        <FeedContentsText>
          오늘은 스투키를 데려온지 10일째다. 그냥 귀여워서 찍어봤다! 스투키는 늘
          귀여워 새로워 짜릿해
        </FeedContentsText>
      </FeedContents>
    </FeedBox>
  );
}
