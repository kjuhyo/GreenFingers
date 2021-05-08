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
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

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
  // console.log('피드에서 프롭스로 받은 다이어리', props.diary);
  // '>' 클릭했을 때 다음 이미지 set
  const nextImg = () => {
    if (currentImgIdx < props.diary.imgUrls.length - 1) {
      const tmp = currentImgIdx + 1;
      setCurrentImgIdx(tmp);
      setCurrentImg(props.diary.imgUrls[tmp]);
    }
  };

  // '<' 클릭했을 때 이전 이미지 set
  const beforeImg = () => {
    if (currentImgIdx > 0) {
      const tmp = currentImgIdx - 1;
      setCurrentImgIdx(tmp);
      setCurrentImg(props.diary.imgUrls[tmp]);
    }
  };

  return (
    <View style={{backgroundColor: '#F9F9F9', paddingHorizontal: 10}}>
      <Card transparent>
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
                style={{color: 'black', fontSize: 23}}
              />
            </TouchableOpacity>
          </Right>
        </CardItem>

        <CardItem cardBody>
          {/* 왼쪽 '<' 버튼 */}
          {currentImgIdx != 0 && (
            <TouchableOpacity
              style={{position: 'absolute', left: 8, zIndex: 1}}
              onPress={() => {
                beforeImg();
              }}>
              <Icon
                type="SimpleLineIcons"
                name="arrow-left"
                style={{
                  color: 'white',
                  fontSize: 30,
                  textShadowRadius: 10,
                  textShadowOffset: {width: 2, height: 1.5},
                }}
              />
            </TouchableOpacity>
          )}
          <Image
            source={{
              uri: currentImg,
            }}
            style={{height: 400, width: null, flex: 1}}
          />
          {/* 오른쪽 '>' 버튼 */}
          {currentImgIdx != props.diary.imgUrls.length - 1 && (
            <TouchableOpacity
              style={{position: 'absolute', right: 8, zIndex: 1}}
              onPress={() => {
                nextImg();
              }}>
              <Icon
                type="SimpleLineIcons"
                name="arrow-right"
                style={{
                  color: 'white',
                  fontSize: 30,
                  textShadowRadius: 10,
                  textShadowOffset: {width: 2, height: 1.5},
                }}
              />
            </TouchableOpacity>
          )}

          {/* 몇번째 사진인지 표시 */}
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
              position: 'absolute',
              zIndex: 1,
              bottom: 3,
              left: '46%',
              borderRadius: 5,
              paddingHorizontal: 4,
            }}>
            <Text style={{color: 'white'}}>
              {currentImgIdx + 1}/{props.diary.imgUrls.length}
            </Text>
          </View>
        </CardItem>
        <CardItem>
          <Body>
            {/* 날짜 */}
            <Text style={{color: 'grey'}}>
              {props.selectedDate.substring(0, 4)}년{' '}
              {props.selectedDate.substring(5, 7)}월{' '}
              {props.selectedDate.substring(8, 10)}일
            </Text>

            {/* 제목 */}
            <Text
              style={{
                color: '#363333',
                fontSize: 13,
                marginTop: 3,
                marginBottom: 5,
              }}>
              제목: {props.diary.title}
            </Text>

            {/* 내용 */}
            <View style={{width: '100%'}}>
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
                // onReady={handleTextReady}
              >
                <Text style={{fontSize: 16}}>{props.diary.content}</Text>
              </ReadMore>
            </View>
          </Body>
        </CardItem>
      </Card>

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
          diary={props.diary}
        />
      </Modal>

      {/* 삭제 확인 모달 */}
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
          diaryId={props.diary.id}
        />
      </Modal>

      {/* 삭제 완료 모달 */}
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
