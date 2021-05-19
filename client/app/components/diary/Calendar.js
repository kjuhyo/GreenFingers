import React, {useState, useEffect} from 'react';

// style
import {Icon, Toast} from 'native-base';
import styled from 'styled-components';

// responsive-screen
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// calendar
import {Calendar} from 'react-native-calendars';
import {ActivityIndicator, Modal, View} from 'react-native';

// modal
import DiarySelectModal from './modal/DiarySelectModal';
import CheckDateModal from './modal/CheckDateModal';
import CompleteModal from './modal/CompleteModal';

// redux
import {useSelector} from 'react-redux';

const CalendarContainer = styled.View`
  height: ${hp('70%')}px;
  justify-content: center;
  padding: 25px;
`;

export function CalendarView(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateCheckModalVisible, setDateCheckModalVisible] = useState(false);
  const [completeModalVisible, setCompleteModalVisible] = useState(false);

  const [today, setToday] = useState();
  const [selectDay, setSelectDay] = useState('');
  const [selectMonth, setSelectMonth] = useState('');
  const [selectYear, setSelectYear] = useState('');

  const [markedDateState, setMarkedDateState] = useState(); // 달력에 표시할 날짜

  const {activePlantId} = useSelector(state => ({
    activePlantId: state.diaryReducer.pid,
  }));

  const {markedDateReal} = useSelector(state => ({
    markedDateReal: state.diaryReducer.markedDate,
  }));

  // props로 전달받은 날짜 목록으로 markedDate 세팅
  const initailMarkedDate = async () => {
    let markedDate = {};
    await Promise.all(
      props.diaryDate.map(diary => {
        markedDate[diary] = {
          marked: true,
          dotColor: '#8AD169',
        };
      }),
    );

    await Promise.all(
      props.waterDate.map(water => {
        if (markedDate[water]) {
          markedDate[water]['selected'] = true;
          markedDate[water]['selectedColor'] = '#b7dfe9';
        } else {
          markedDate[water] = {
            selected: true,
            selectedColor: '#b7dfe9',
          };
        }
      }),
    );
    setMarkedDateState(markedDate);
  };

  useEffect(() => {
    if (props.diaryDate != undefined && props.waterDate != undefined) {
      initailMarkedDate();
    }
  }, [props.diaryDate, props.waterDate]);

  // 현재 날짜 및 시간
  const now = new Date();
  useEffect(() => {
    const tmp =
      now.getFullYear() +
      '-' +
      ('0' + (now.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + now.getDate()).slice(-2);

    setToday(tmp); // 현재날짜 set
  }, []);

  return (
    <CalendarContainer>
      <Calendar
        style={{borderRadius: 10}}
        theme={{
          todayTextColor: '#8AD169',
          monthTextColor: '#29582C',
          textMonthFontSize: 20,
          textMonthFontWeight: 'bold',
          'stylesheet.day.basic': {
            base: {
              width: 32,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
          // 'stylesheet.dot': {
          //   dot: {
          //     width: 4,
          //     height: 4,
          //     marginTop: 3,
          //     borderRadius: 2,
          //   },
          // },
        }}
        // Initially visible month. Default = Date()
        current={today}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2021-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2021-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          // 현재 날짜 이후일 경우: '미래의 일은 아직 알 수 없어요!' Toast 띄우기
          // 현재 날짜 이전일 경우: 다이어리 보기/작성/물주기 선택 모달 띄우기
          if (day.dateString <= today) {
            setModalVisible(!modalVisible);
            setSelectDay(day.day);
            setSelectMonth(day.month);
            setSelectYear(day.year);
            props.setSelectedDate(day.dateString);
          } else {
            Toast.show({
              text: '미래의 일은 아직 알 수 없어요!',
              buttonText: '확인',
              duration: 4000,
            });
          }
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          // console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy . MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          // console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={direction =>
          direction == 'left' ? (
            <Icon
              type="Entypo"
              name="chevron-thin-left"
              style={{fontSize: 20, color: '#29582C'}}
            />
          ) : (
            <Icon
              type="Entypo"
              name="chevron-thin-right"
              style={{fontSize: 20, color: '#29582C'}}
            />
          )
        }
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={7}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter.
        // renderHeader={(date) => {
        //   return (
        //   );
        // }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        markedDates={markedDateState} // dot 표시할 날짜 넣어줌
      />

      {/* 다이어리 보기/다이어리 작성/물주기 선택 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setDateCheckModalVisible(false);
        }}>
        <DiarySelectModal
          setModalVisible={setModalVisible}
          setShowDiary={props.setShowDiary}
          setDateCheckModalVisible={setDateCheckModalVisible}
          navigation={props.navigation}
          activePlant={props.activePlant}
          selectedDate={props.selectedDate}
          waterDate={props.waterDate}
          waterDateId={props.waterDateId}
        />
      </Modal>

      {/* 날짜 확인 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={dateCheckModalVisible}
        onRequestClose={() => {
          setDateCheckModalVisible(!dateCheckModalVisible);
        }}>
        <CheckDateModal
          setDateCheckModalVisible={setDateCheckModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
          // 선택한 일, 월, 년 데이터 넘기기
          selectDay={selectDay}
          selectMonth={selectMonth}
          selectYear={selectYear}
          activePlant={props.activePlant}
        />
      </Modal>

      {/* 물주기 완료 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={completeModalVisible}
        onRequestClose={() => {
          setCompleteModalVisible(!completeModalVisible);
        }}>
        <CompleteModal
          content="물주기 완료💧"
          setDateCheckModalVisible={setDateCheckModalVisible}
          setCompleteModalVisible={setCompleteModalVisible}
        />
      </Modal>
    </CalendarContainer>
  );
}
