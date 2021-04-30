// react
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';

// redux
import {useSelector} from 'react-redux';

// axios
import {writeDiary} from '../../api/diary';

// style
import {Icon, Toast, Root} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  SubHeadingText,
  TextInputBox,
  ImgSelectBox,
  ImgSelectBtn,
  SelectedImgBox,
  SelectedImg,
  CompleteBtn,
  CompleteBtnText,
} from '../../assets/theme/DiaryStyle';

// responsive-screen
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// image-picker
import ImagePicker from 'react-native-image-crop-picker';

export function DiaryWriteScreen({navigation}) {
  const [titleState, setTitleState] = useState('');
  const [contentState, setContentState] = useState('');
  const [imgState, setImgState] = useState([]);

  const maxImgCnt = 5; // 사진 선택 최대 개수
  const {uid} = useSelector(state => ({uid: state.authReducer.uid}));

  // 다이어리 작성 api 요청 함수
  const diaryWrite = async () => {
    // 제목, 내용, 사진 모두 입력했을 경우에만 다이어리 작성 api 요청
    if (titleState == '') {
      Toast.show({
        text: '제목을 입력해주세요.',
        buttonText: '확인',
        duration: 4000,
      });
    } else if (contentState == '') {
      Toast.show({
        text: '내용을 입력해주세요.',
        buttonText: '확인',
        duration: 4000,
      });
    } else if (imgState.length == 0) {
      Toast.show({
        text: '사진을 선택해주세요.',
        buttonText: '확인',
        duration: 4000,
      });
    } else {
      const params = {
        userId: uid,
        plantId: 1,
        title: titleState,
        content: contentState,
        imgUrls: imgState,
      };
      await writeDiary(params);
      navigation.navigate('Diary');
    }
  };

  // 여러개의 사진 선택
  const PickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then(images => {
        const tmpImg = images.map(i => i.path);
        // 최대 사진 개수가 넘어갈 경우 Toast 띄움
        if (imgState.length + tmpImg.length > maxImgCnt) {
          Toast.show({
            text: `사진은 최대 ${maxImgCnt}장까지 선택할 수 있어요.`,
            buttonText: '확인',
            duration: 3000,
          });
        }
        // 최대 사진 개수 이하일 경우 imgState에 새로 선택한 사진 추가
        else {
          const img = imgState;
          setImgState(img.concat(tmpImg));
        }
      })
      .catch(e => console.log(e));
  };

  // 사진 촬영
  const PickSingleWithCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      width: 500,
      height: 500,
    })
      .then(image => {
        // 최대 사진 개수가 넘어갈 경우 Toast 띄움
        if (imgState.length + 1 > maxImgCnt) {
          Toast.show({
            text: `사진은 최대 ${maxImgCnt}장까지 선택할 수 있어요.`,
            buttonText: '확인',
            duration: 3000,
          });
        }
        // 최대 사진 개수 이하일 경우 imgState에 새로 선택한 사진 추가
        else {
          setImgState([...imgState, image.path]);
        }
      })
      .catch(e => console.log(e));
  };

  // 촬영하거나 선택한 사진들 보여주는 함수
  const imgRendering = () => {
    const result = [];

    // 최대 사진 개수를 넘어가지 않는 경우 현재 선택된 사진 개수만큼 for문 돌림
    if (imgState != undefined && imgState.length <= maxImgCnt) {
      for (let i = 0; i < imgState.length; i++) {
        result.push(<SelectedImg key={i} source={{uri: imgState[i]}} />);
      }
    }
    // 최대 사진 개수를 넘어갈 경우 최대 개수만큼 for문 돌림
    else {
      for (let i = 0; i < maxImgCnt; i++) {
        result.push(<SelectedImg key={i} source={{uri: imgState[i].uri}} />);
      }
    }
    return result;
  };

  return (
    <Root>
      <ScrollView>
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          {/* 글 작성 하는 영역 */}
          <SubHeadingText>
            <Text style={{fontWeight: 'bold'}}>글 작성</Text>
          </SubHeadingText>
          <TextInputBox
            placeholder="제목"
            onChangeText={setTitleState}
            value={titleState}
          />
          <TextInputBox
            onChangeText={setContentState}
            value={contentState}
            multiline
            numberOfLines={10}
            placeholder="식물과 있었던 일을 기록해주세요 :)"
          />
          {/* 사진 선택 영역 */}
          <SubHeadingText>
            <Text style={{fontWeight: 'bold'}}>사진선택</Text>
          </SubHeadingText>
          <ImgSelectBox>
            <ImgSelectBtn
              style={{marginRight: 10}}
              onPress={() => {
                PickMultiple();
              }}>
              <Icon
                type="MaterialCommunityIcons"
                name="image-multiple"
                style={{fontSize: 50}}
              />
              <Text>사진 선택</Text>
            </ImgSelectBtn>
            <ImgSelectBtn
              style={{marginLeft: 10}}
              onPress={() => {
                PickSingleWithCamera();
              }}>
              <Icon
                type="MaterialCommunityIcons"
                name="camera"
                style={{fontSize: 50}}
              />
              <Text>사진 촬영</Text>
            </ImgSelectBtn>
          </ImgSelectBox>

          {/* 선택한 사진 보여주는 영역 */}
          <SubHeadingText>
            <Text style={{fontWeight: 'bold'}}>선택한 사진</Text>
            <Text style={{color: 'grey', marginLeft: 7}}>
              {imgState ? imgState.length : 0}/{maxImgCnt}
            </Text>
          </SubHeadingText>
          <SelectedImgBox>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {imgState && imgRendering()}
            </ScrollView>
          </SelectedImgBox>

          {/* 완료 버튼 */}
          <CompleteBtn onPress={() => diaryWrite()}>
            <CompleteBtnText>완료</CompleteBtnText>
          </CompleteBtn>
        </KeyboardAwareScrollView>
      </ScrollView>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {height: hp('85%'), paddingHorizontal: 30, paddingVertical: 10},
});
