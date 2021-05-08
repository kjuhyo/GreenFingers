import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import {Container} from 'native-base';

import {ThemeProvider} from 'styled-components';
import theme from '../../assets/theme/index';
import {
  SurveyButton,
  SurveyButtonText,
  SurveyQText,
  AnsButton,
  AnsText,
} from '../../assets/theme/surveystyles';
import RadioButtonRN from 'radio-buttons-react-native';
import ProgressBar from '../../components/recommendation/progressbar';
import CompleteModal from '../../components/diary/modal/CompleteModal';
// redux
import {useSelector, useDispatch} from 'react-redux';
import {setAnswer} from '../../reducers/surveyReducer';
import {initialWindowMetrics} from 'react-native-safe-area-context';

// export function SurveyquestionScreen({navigation}) {
export function SurveyquestionScreen(props) {
  const [message, setMessage] = useState('');
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const dispatch = useDispatch();
  const setUserAnswer = (id, answer) => dispatch(setAnswer(id, answer));

  const {mbti, answer} = useSelector(state => ({
    mbti: state.surveyReducer.mbti,
    answer: state.surveyReducer.answer,
  }));
  console.log('redux answer', answer);
  const pageId = props.route.params.id;
  const mbtiIdx = props.route.params.id - 1;
  const question = mbti[mbtiIdx].question;
  const answerA = mbti[mbtiIdx].opt1.answer;
  const answerB = mbti[mbtiIdx].opt2.answer;
  const valueA = mbti[mbtiIdx].opt1.val;
  const valueB = mbti[mbtiIdx].opt2.val;
  const [selected, setSelected] = useState(answer[mbtiIdx]);

  const onSubmit = async () => {
    if (selected === 'A') {
      setUserAnswer(pageId, valueA);
    } else if (selected === 'B') {
      setUserAnswer(pageId, valueB);
    } else {
      setMessage('답변을 선택해주세요');
      setCompleteModalVisible(true);
      return;
    }
    console.log(pageId, mbti.length, props);
    if (pageId === mbti.length) {
      props.navigation.navigate('Surveyresult');
    } else {
      props.navigation.push('Surveyquestion', {
        id: pageId + 1,
      });
    }
  };

  const ProgressData = {
    completed: (mbtiIdx / mbti.length) * 100,
  };

  return (
    <Container style={styles.container}>
      <View style={styles.titlecontainer}>
        <ProgressBar completed={ProgressData.completed} />
      </View>
      <View style={styles.contentcontainer}>
        <SurveyQText style={styles.contentques} multiline={true}>
          {question}
        </SurveyQText>
        <View style={styles.contentoptions}>
          <AnsButton
            style={selected === 'A' ? styles.selected : styles.ansbutton}
            onPress={() => setSelected('A')}>
            <AnsText>{answerA}</AnsText>
          </AnsButton>
          <AnsButton
            style={selected === 'B' ? styles.selected : styles.ansbutton}
            onPress={() => setSelected('B')}>
            <AnsText style={{flexWrap: 'wrap'}}>{answerB}</AnsText>
          </AnsButton>
        </View>
      </View>
      <View style={styles.buttoncontainer}>
        <ThemeProvider theme={theme}>
          <SurveyButton
            onPress={() => {
              onSubmit();
            }}>
            <SurveyButtonText>계속</SurveyButtonText>
          </SurveyButton>
        </ThemeProvider>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}>
        <CompleteModal
          content={message}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>
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
    flex: 5,
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
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingVertical: 5,
  },
  contentoptions: {
    flex: 5,
    paddingVertical: 5,
    marginVertical: 20,
    // flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ansbutton: {
    // marginVertical: 25,
  },
  selected: {
    borderColor: '#8AD169',
    backgroundColor: 'white',
    borderWidth: 0.8,
  },
  optionshort: {
    marginHorizontal: 10,
    flex: 1,
    height: 100,
    borderRadius: 10,
  },
  optionlong: {
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 10,
  },
  optiontext: {
    padding: 15,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
});
