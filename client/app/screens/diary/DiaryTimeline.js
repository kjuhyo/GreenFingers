import {Container, Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import Timeline from 'react-native-timeline-flatlist';
import styled from 'styled-components';

export default function DiaryTimeline({route}) {
  const [data, setData] = useState();

  // console.log('받은 데이터', data);
  const setInitialData = async () => {
    let diaryList = route.params;
    let tmpDiary = [];
    await Promise.all(
      diaryList.map(diary => {
        tmpDiary.push({
          time:
            diary.writeDateTime.substring(2, 4) +
            '.' +
            diary.writeDateTime.substring(5, 7) +
            '.' +
            diary.writeDateTime.substring(8, 10),
          title: diary.title,
          description: diary.content,
          imageUrl: diary.imgUrls,
        });
        // console.log('다이어리 이미지 목록', diary.imgUrls);
      }),
    );
    setData(tmpDiary);
  };

  useEffect(() => {
    if (route.params.length != 0) {
      setInitialData();
    }
  }, []);

  const renderImgs = imgs => {
    // console.log('렌더함수 안에 imgs가 잘 받아오나?', imgs);
    return imgs.map((img, idx) => (
      <Image
        key={idx}
        style={{width: 250, height: 250, borderRadius: 10, marginRight: 5}}
        source={{
          uri: img,
        }}
      />
    ));
  };

  const renderDetail = (rowData, sectionID, rowID) => {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {renderImgs(rowData.imageUrl)}
          {/* <Image
            style={{width: 250, height: 250, borderRadius: 10}}
            source={{
              uri: rowData.imageUrl,
            }}
          />
          <Image
            style={{width: 250, height: 250, borderRadius: 10}}
            source={{
              uri: rowData.imageUrl,
            }}
          /> */}
        </ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{rowData.title}</Text>
        <Text style={{color: 'grey'}}>{rowData.description}</Text>
      </View>
    );
  };

  return (
    <Container>
      {data != undefined && data.length !== 0 ? (
        <Timeline
          data={data}
          circleColor="#8AD169"
          lineColor="#8AD169"
          innerCircle={'dot'}
          // timeContainerStyle={{minWidth: 52, marginTop: -5}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#8AD169',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          options={{style: {marginHorizontal: 20, marginTop: 20}}}
          renderDetail={renderDetail}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#F9F9F9',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>아직 등록된 다이어리가 없어요.</Text>
          <Text style={{fontSize: 18}}>
            다이어리를 작성하고 타임라인을 확인해보세요.
          </Text>
        </View>
      )}
    </Container>
  );
}
