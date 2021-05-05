import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, PickerIOSComponent} from 'react-native';
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  StyleProvider,
  Button,
  Icon,
} from 'native-base';

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
//mockdata
import {mockMBTI} from '../../components/auth/mockdata';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {setMBTI, setAnswer} from '../../reducers/surveyReducer';

// export function SurveyquestionScreen({navigation}) {
export function SurveyquestionScreen(props) {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();
  const setUserAnswer = (id, answer) => dispatch(setAnswer(id, answer));

  const {mbti, answer} = useSelector(state => ({
    mbti: state.surveyReducer.mbti,
    answer: state.surveyReducer.answer,
  }));
  console.log('redux answer', answer);

  let pageId = props.route.params.id;
  let mbtiIdx = props.route.params.id - 1;

  let question = mbti[mbtiIdx].question;
  let answerA = mbti[mbtiIdx].optA.ans;
  let answerB = mbti[mbtiIdx].optB.ans;
  let valueA = mbti[mbtiIdx].optA.val;
  let valueB = mbti[mbtiIdx].optB.val;

  const onSubmit = async () => {
    if (selected === 'A') {
      setUserAnswer(pageId, valueA);
    } else {
      setUserAnswer(pageId, valueB);
    }
    setSelected('');
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
            <AnsText>{answerB}</AnsText>
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
