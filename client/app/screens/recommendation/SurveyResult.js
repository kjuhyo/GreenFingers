import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Container} from 'native-base';

import styled, {ThemeProvider} from 'styled-components';
import theme from '../../assets/theme/index';
import {
  SurveyButton,
  SurveyButtonText,
  SurveyQText,
} from '../../assets/theme/surveystyles';
import ProgressBar from '../../components/recommendation/progressbar';
import Plantdetailmodal from '../../components/recommendation/plantdetailmodal';

// redux
import {useSelector, useDispatch} from 'react-redux';
// api
import {mbtiResult} from '../../api/recommendation';

//loading
import {RenderLoading} from '../../components/common/renderLoading';

export function SurveyresultScreen(props) {
  const [plantId, setPlantId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mbtiResultResponse, setMbtiResultResponse] = useState({});
  const [plantA, setPlantA] = useState({});
  const [plantB, setPlantB] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {answer} = useSelector(state => ({
    answer: state.surveyReducer.answer,
  }));

  const openModal = id => {
    setModalVisible(true);
    setPlantId(id);
  };
  useEffect(async () => {
    setIsLoading(true);
    const mbtiResponse = await mbtiResult(answer.join(''));
    setMbtiResultResponse(mbtiResponse.data);
    setPlantA(mbtiResponse.data.p[0]);
    setPlantB(mbtiResponse.data.p[1]);
    setIsLoading(false);
  }, []);

  const ProgressData = {completed: 100};

  return (
    <Container style={styles.container}>
      <View style={styles.titlecontainer}>
        <ProgressBar completed={ProgressData.completed} />
      </View>
      <View style={styles.contentcontainer}>
        <SurveyQText style={styles.contentques} multiline={true}>
          {mbtiResultResponse.type}
          {'\n'}
          {mbtiResultResponse.summagry}
          {'\n'}
        </SurveyQText>
        <View
          style={{
            alignSelf: 'flex-start',
            flex: 0.6,
            color: '#808285',
            marginLeft: 12,
            marginTop: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#29582C',
              marginTop: 2,
              fontWeight: 'bold',
            }}>
            추천하는 식물
          </Text>
        </View>
        <View style={styles.contentoptions}>
          <View style={styles.recomwrap}>
            <TouchableOpacity
              style={styles.recom}
              onPress={() => openModal(plantA.id)}>
              <Image
                style={styles.recomimg}
                source={{
                  uri: plantA.image,
                }}
              />
              <Text style={styles.recomtext}>{plantA.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.recom}
              onPress={() => openModal(plantB.id)}>
              <Image
                style={styles.recomimg}
                source={{
                  uri: plantB.image,
                }}
              />
              <Text style={styles.recomtext}>{plantB.name}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'flex-end',
              marginTop: 7,
              color: '#808285',
            }}>
            <Text
              style={{fontSize: 12, color: 'rgba(0,0,0,0.5)', marginTop: 2}}>
              각 식물을 눌러 상세 설명을 확인해 보세요.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.etccontainer}>
        <Text>{mbtiResultResponse.etc}</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <ThemeProvider theme={theme}>
          <SurveyButton>
            <SurveyButtonText
              onPress={() => props.navigation.navigate('Home')}
              style={{fontSize: 15, fontWeight: 'bold'}}>
              완료
            </SurveyButtonText>
          </SurveyButton>
        </ThemeProvider>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Plantdetailmodal
          setModalVisible={setModalVisible}
          plantId={plantId}></Plantdetailmodal>
      </Modal>
      <RenderLoading isLoading={isLoading}></RenderLoading>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  titlecontainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentcontainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingHorizontal: 40,
  },
  contentques: {
    display: 'flex',
    flex: 1.5,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  contentoptions: {
    flex: 4,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomwrap: {
    flexDirection: 'row',
  },
  recom: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#F2F5E1',
    marginHorizontal: 5,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomimg: {
    alignSelf: 'stretch',
    width: 150,
    height: 150,
    flex: 8,
    padding: 0,
    justifyContent: 'center',
    // resizeMode: 'contain',
    transform: [{scale: 0.7}],
    borderRadius: 10,
  },
  recomtext: {
    textAlign: 'center',
    flex: 2,
    fontWeight: '700',
    color: '#29582C',
    fontSize: 13,
  },
  etccontainer: {
    flex: 1,
    paddingHorizontal: 60,
    marginTop: 20,
  },
});
