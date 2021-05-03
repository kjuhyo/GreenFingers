// react
import React, {useState, useEffect} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-gesture-handler';

// axios
import {writeDiary} from '../../api/diary';

// style
import {Icon, Toast, Root, Badge, Item} from 'native-base';
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
  const [multiPicker, setMultiPicker] = useState(false);
  const [isCrop, setIsCrop] = useState(false);

  const maxImgCnt = 5; // 사진 선택 최대 개수

  useEffect(() => {
    // console.log('크롭 전 imgState', imgState);
    const cropImgState = imgState.map(img => {
      // console.log('hi');
      // console.log('img 하나하나', img);
      const cropImg = crop(img);
      // console.log('crop함수 결과', cropImg);
      return cropImg;
    });
    // console.log('crop 후 cropImgState', cropImgState);
    // console.log('crop 후 imgState', imgState);
    setImgState(cropImgState);
    // console.log('hh', imgState);

    // return () => {
    //   cleanup;
    // };
  }, [multiPicker]);

  // Toast 띄우는 함수
  const toastShow = content => {
    Toast.show({
      text: content,
      buttonText: '확인',
      duration: 4000,
    });
  };

  // 다이어리 작성 api 요청 함수
  const diaryWrite = async () => {
    // 제목, 내용, 사진 모두 입력했을 경우에만 다이어리 작성 api 요청
    if (titleState == '') {
      toastShow('제목을 입력해주세요.');
    } else if (contentState == '') {
      toastShow('내용을 입력해주세요.');
    } else if (imgState.length == 0) {
      toastShow('사진을 선택해주세요.');
    } else {
      const formData = new FormData();
      formData.append('plantId', 1);
      formData.append('title', titleState);
      formData.append('content', contentState);
      imgState.forEach((img, i) => {
        formData.append('files', {
          uri: img,
          name: 'image.jpg',
          type: 'image/jpeg',
        });
      });
      const result = await writeDiary(formData);
      console.log(result);
      navigation.navigate('Diary');
    }
  };

  const crop = async imgPath => {
    setIsCrop(false);
    const cropResult = await ImagePicker.openCropper({
      path: imgPath,
      width: 500,
      height: 500,
    });
    // console.log('cropper 안', img.path);

    // console.log('크롭 안 크롭 결과', cropResult);
    setIsCrop(true);
    return cropResult.path;

    // const cropResult = await ImagePicker.openCropper({
    //   path: imgPath,
    //   width: 500,
    //   height: 500,
    // });
    // console.log('크롭 직후', cropResult.path);
    // return cropResult.path;
  };

  // 여러개의 사진 선택
  const PickMultiple = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      multiple: true,
      mediaType: 'photo', // 사진만 받기(동영상x)
    })
      .then(images => {
        const tmpImg = images.map(i => i.path);
        // 최대 사진 개수가 넘어갈 경우 Toast 띄움
        if (imgState.length + tmpImg.length > maxImgCnt) {
          toastShow(`사진은 최대 ${maxImgCnt}장까지 선택할 수 있어요.`);
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
      mediaType: 'photo', // 사진만 받기(동영상x)
    })
      .then(image => {
        // 최대 사진 개수가 넘어갈 경우 Toast 띄움
        if (imgState.length + 1 > maxImgCnt) {
          toastShow(`사진은 최대 ${maxImgCnt}장까지 선택할 수 있어요.`);
        }
        // 최대 사진 개수 이하일 경우 imgState에 새로 선택한 사진 추가
        else {
          setImgState([...imgState, image.path]);
        }
      })
      .catch(e => console.log(e));
  };

  // 엑스 버튼 눌렀을 때 imgState에서 해당 사진 uri 삭제하는 함수
  const deleteImg = deleteID => {
    const newImg = imgState.filter((img, idx) => {
      return idx !== deleteID;
    });
    setImgState(newImg);
  };

  // 촬영하거나 선택한 사진들 보여주는 함수
  const imgRendering = () => {
    // console.log('이미지 렌더링', imgState);
    return imgState.map((img, idx) => (
      <View key={idx}>
        <SelectedImg source={{uri: img}} />
        <TouchableOpacity
          style={{position: 'absolute', zIndex: 10, right: -3}}
          onPress={() => deleteImg(idx)}>
          <Badge style={{backgroundColor: 'rgba(0,0,0,0)'}}>
            <View style={{backgroundColor: 'white', borderRadius: 50}}>
              <Icon
                type="AntDesign"
                name="closecircle"
                style={{color: 'rgba(0,0,0, 0.8)', fontSize: 25}}
              />
            </View>
          </Badge>
        </TouchableOpacity>
      </View>
    ));
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
