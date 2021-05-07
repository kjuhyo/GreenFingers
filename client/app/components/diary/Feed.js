import React, {useState} from 'react';
import {Text, Image, Modal, TouchableOpacity, View} from 'react-native';

// style
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Thumbnail,
} from 'native-base';
import styled from 'styled-components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// modal
import DeleteModal from './modal/DeleteModal';
import FeedSelectModal from './modal/FeedSelectModal';
import CompleteModal from './modal/CompleteModal';

// library
import ReadMore from 'react-native-read-more-text';

export default function Feed(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const [currentImg, setCurrentImg] = useState(props.diary.imgUrls[0]);

  const renderTruncatedFooter = handlePress => {
    return (
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: 'grey'}} onPress={handlePress}>
          더보기
        </Text>
      </View>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: 'grey'}} onPress={handlePress}>
          접기
        </Text>
      </View>
    );
  };

  // '>' 클릭했을 때 다음 이미지 set
  const nextImg = () => {
    let currentImgIdx = props.diary.imgUrls.indexOf(currentImg);
    if (currentImgIdx < props.diary.imgUrls.length - 1) {
      currentImgIdx += 1;
      setCurrentImg(props.diary.imgUrls[currentImgIdx]);
    }
  };

  // '<' 클릭했을 때 이전 이미지 set
  const beforeImg = () => {
    let currentImgIdx = props.diary.imgUrls.indexOf(currentImg);
    if (currentImgIdx > 0) {
      currentImgIdx -= 1;
      setCurrentImg(props.diary.imgUrls[currentImgIdx]);
    }
  };

  return (
    <View>
      <Content>
        <Card>
          <CardItem>
            <Left />

            <Right>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="dots-vertical"
                  style={{color: 'black'}}
                />
              </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem cardBody>
            {/* 왼쪽 '<' 버튼 */}
            <TouchableOpacity
              onPress={() => {
                beforeImg();
              }}>
              <Icon type="SimpleLineIcons" name="arrow-left" />
            </TouchableOpacity>
            <Image
              source={{
                uri: currentImg,
              }}
              style={{height: 400, width: null, flex: 1}}
            />
            {/* 오른쪽 '>' 버튼 */}
            <TouchableOpacity
              onPress={() => {
                nextImg();
              }}>
              <Icon type="SimpleLineIcons" name="arrow-right" />
            </TouchableOpacity>
          </CardItem>

          {/* 몇번째 사진인지 표시 */}
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'grey'}}>
              {props.diary.imgUrls.indexOf(currentImg) + 1}/
              {props.diary.imgUrls.length}
            </Text>
          </View>
          <CardItem>
            <Body>
              {/* 날짜 */}
              <Text style={{color: 'grey'}}>
                {props.selectedDate.substring(0, 4)}년{' '}
                {props.selectedDate.substring(5, 7)}월{' '}
                {props.selectedDate.substring(8, 10)}일
              </Text>

              {/* 제목, 내용 */}
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
                // onReady={handleTextReady}
              >
                <View>
                  <Text style={{color: '#363333', fontSize: 13}}>
                    제목: {props.diary.title}
                  </Text>
                  <Text style={{fontSize: 16}}>{props.diary.content}</Text>
                </View>
              </ReadMore>
            </Body>
          </CardItem>
        </Card>
      </Content>

      {/* 다이어리 수정,삭제 선택 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
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
          setDeleteModalVisible(!deleteModalVisible);
        }}>
        <DeleteModal
          setDeleteModalVisible={setDeleteModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>

      {/* 삭제 완료 모달창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}>
        <CompleteModal
          content="삭제 되었습니다."
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>
    </View>
  );
}
