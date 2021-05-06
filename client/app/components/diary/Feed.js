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
              <Text>날짜</Text>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
                // onReady={handleTextReady}
              >
                <Text>
                  오늘은 스투키를 데려온지 10일째다. 잘 자라고 있는 스투키 사진
                  한장 찰칵~~~ 뾰족뾰족 스투키 귀여워 뾰족뾰족 스투키 귀여워
                  뾰족뾰족 스투키 귀여워 뾰족뾰족 스투키 귀여워 뾰족뾰족 스투키
                  귀여워
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
