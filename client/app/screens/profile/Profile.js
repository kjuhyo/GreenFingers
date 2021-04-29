import React from 'react';
import {Modal, Text} from 'react-native';

// styled-components
import styled from 'styled-components';

// native-base
import {Icon} from 'native-base';

// responsive-screen
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useState} from 'react';
import LogoutModal from '../../components/profile/LogoutModal';
import CompleteModal from '../../components/diary/modal/CompleteModal';

// 프로필 전체 페이지 컨테이너
const ProfileContainer = styled.View`
  height: ${hp('60%')}px;
  padding: 30px;
`;

// 프로필 영역
const ProfileBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 30px;
  padding-right: 10px;
`;

// 프로필 사진 영역
const ProfileImgBox = styled.View`
  flex: 1;
`;
// 프로필 사진
const ProfileImg = styled.Image`
  width: 85px;
  height: 85px;
  border-radius: 170px;
`;

// 유저 정보 영역(이메일, 보유 식물 수)
const ProfileInfo = styled.View`
  flex: 2;
  height: 40%;
  justify-content: space-between;
  padding: 10px;
  margin-left: 10px;
`;

// 메뉴 영역
const MenuBox = styled.View`
  flex: 1.5;
  background-color: white;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

// 메뉴 한개
const MenuItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [completeModalVisible, setCompleteModalVisible] = useState(false);

  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileImgBox>
          <ProfileImg
            source={{
              uri:
                'https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg',
            }}
          />
        </ProfileImgBox>
        <ProfileInfo>
          <Text style={{fontSize: 19}}>user@user.com</Text>
          <Text style={{fontSize: 13, color: 'grey'}}>보유 식물 3개</Text>
        </ProfileInfo>
      </ProfileBox>
      <MenuBox>
        <MenuItem>
          <Icon type="MaterialCommunityIcons" name="autorenew" />
          <Text style={{marginLeft: 20}}>프로필 사진 변경</Text>
        </MenuItem>
        <MenuItem>
          <Icon type="MaterialCommunityIcons" name="form-textbox-password" />
          <Text style={{marginLeft: 20}}>비밀번호 재설정</Text>
        </MenuItem>
        <MenuItem
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon type="MaterialCommunityIcons" name="logout" />
          <Text style={{marginLeft: 20}}>로그아웃</Text>
        </MenuItem>
      </MenuBox>

      {/* 로그아웃 확인 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <LogoutModal
          setModalVisible={setModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>

      {/* 로그아웃 완료 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}>
        <CompleteModal
          content="로그아웃 되었습니다."
          setModalVisible={setModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>
    </ProfileContainer>
  );
}
