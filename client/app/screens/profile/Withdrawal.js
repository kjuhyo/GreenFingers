import React, {useState} from 'react';
import {Modal} from 'react-native';

// style
import styled from 'styled-components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {CheckBox, Icon, Root, Toast} from 'native-base';
import {CompleteBtn, CompleteBtnText} from '../../assets/theme/DiaryStyle';

// Modal
import CompleteModal from '../../components/diary/modal/CompleteModal';

// 회원탈퇴 안내 페이지 전체 컨테이너
const Withdrawalcontainer = styled.View`
  height: ${hp('80%')}px;
  padding: 30px;
`;

// 아이콘+텍스트 or 텍스트 감싸는 뷰
const TextBox = styled.View`
  flex: ${props => props.flexHeight || 1};
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${props => props.marginBottom || 0};
  margin-top: ${props => props.marginTop || 0};
`;

// 텍스트들 감싸는 박스
const NoticeTextBox = styled.View`
  flex: 1.5;
  flex-shrink: 1;
`;

// 텍스트
const NoticeText = styled.Text`
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || 0};

  flex-shrink: 1;
`;

export default function Withdrawal() {
  const [completeModalVisible, setCompleteModalVisible] = useState(false);
  const [checkedState, setCheckedState] = useState(false);

  // 체크박스가 true일 경우 완료 모달, false일 경우 Toast 띄움
  const check = () => {
    if (!checkedState) {
      Toast.show({
        text: '안내사항에 동의 후 회원탈퇴 가능합니다.',
        buttonText: '확인',
        duration: 5000,
      });
    } else {
      setCompleteModalVisible(true);
    }
  };

  return (
    <Root>
      <Withdrawalcontainer>
        <TextBox marginBottom="30px" marginTop="30px">
          <NoticeText fontWeight="bold">
            회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.
          </NoticeText>
        </TextBox>
        <TextBox marginBottom="10px">
          <Icon
            type="MaterialCommunityIcons"
            name="check-bold"
            style={{fontSize: 18}}
          />
          <NoticeText fontWeight="bold" fontSize="16px">
            사용하고 계신 아이디(user@user.com)는 탈퇴할 경우 복구가
            불가능합니다.
          </NoticeText>
        </TextBox>
        <TextBox marginBottom="30px" flexHeight="1.7">
          <Icon
            type="MaterialCommunityIcons"
            name="check-bold"
            style={{fontSize: 18}}
          />
          <NoticeTextBox>
            <NoticeText fontWeight="bold" fontSize="16px" marginBottom="10px">
              탈퇴 후 회원정보 및 서비스 이용기록은 모두 삭제됩니다.
            </NoticeText>
            <NoticeText fontSize="13px">
              회원정보 및 그룹 가입 이력, 잔디 정보 등 서비스 이용기록은 모두
              삭제되며, 삭제된 데이터는 복구되지 않습니다.
            </NoticeText>
          </NoticeTextBox>
        </TextBox>
        <NoticeTextBox style={{alignItems: 'center'}}>
          <NoticeText color="#F44336">
            탈퇴 후에는 아이디 user@user.com으로 다시 가입할 수 없으며 아이디와
            데이터는 복구할 수 없습니다.
          </NoticeText>
        </NoticeTextBox>
        <TextBox>
          <CheckBox
            color="#29582C"
            checked={checkedState}
            onPress={() => setCheckedState(!checkedState)}
            style={{width: 22, height: 22, marginRight: 15}}
          />
          <NoticeText>
            안내사항을 모두 확인하였으며, 이에 동의합니다.
          </NoticeText>
        </TextBox>
        <CompleteBtn flexHeight="0.7" onPress={() => check()}>
          <CompleteBtnText>완료</CompleteBtnText>
        </CompleteBtn>

        {/* 회원탈퇴 완료 모달*/}
        <Modal
          animationType="fade"
          transparent={true}
          visible={completeModalVisible}
          onRequestClose={() => {
            setCompleteModalVisible(!completeModalVisible);
          }}>
          <CompleteModal
            // complete={complete}
            content="회원탈퇴 완료"
            setCompleteModalVisible={setCompleteModalVisible}
          />
        </Modal>
      </Withdrawalcontainer>
    </Root>
  );
}
