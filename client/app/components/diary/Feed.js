import React, {useState} from 'react';
import {Text, Image, Modal, TouchableOpacity} from 'react-native';

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

  const renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: 'black'}} onPress={handlePress}>
        더보기
      </Text>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: 'black'}} onPress={handlePress}>
        접기
      </Text>
    );
  };

  const handleTextReady = () => {
    console.log('ready');
  };

  return (
    <Container>
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
            <Image
              source={{
                uri:
                  'http://cereshome.co.kr/web/product/small/20200420/659ff6db3048df1a413a053655c22ebb.jpg',
              }}
              style={{height: 400, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Body>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
                // onReady={handleTextReady}
              >
                <Text>
                  오늘은 스투키를 데려온지 10일째다. 그냥 귀여워서 찍어봤다!
                  스투키는 늘 귀여워 새로워 짜릿해오늘은 스투키를 데려온지
                  10일째다. 그냥 귀여워서 찍어봤다! 스투키는 늘 귀여워 새로워
                  짜릿해오늘은 스투키를 데려온지 10일째다.오늘은 스투키를
                  데려온지 10일째다. 그냥 귀여워서 찍어봤다! 스투키는 늘 귀여워
                  새로워 짜릿해오늘은 스투키를 데려온지 10일째다. 그냥 귀여워서
                  찍어봤다! 스투키는 늘 귀여워 새로워 짜릿해오늘은 스투키를
                  데려온지 10일째다.
                </Text>
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
    </Container>
  );
}
