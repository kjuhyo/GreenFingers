'use strict';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Header, Content} from 'native-base';
import {
  ViroARScene,
  ViroText,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARSceneNavigator,
  Viro3DObject,
} from '@viro-community/react-viro';

export function ArIntroScreen({navigation}) {
  return <ViroARSceneNavigator initialScene={{scene: ArIntro}} />;
}
function ArIntro({navigation}) {
  return (
    // <View>
    //   <Text>AR</Text>
    // </View>

    <ViroARScene>
      <ViroAmbientLight color={'#aaaaaa'} />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, -0.2]}
        position={[0, 3, 1]}
        color="yellow"
        castsShadow={true}
      />
      <ViroText
        text="Hello World"
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      {/* <Viro3DObject
        source={require('../../../app/cactus_gasteria.obj')}
        resources={[
          require('../../../app/ceramic_struktur_DIF_1k.jpg'),
          require('../../../app/cactus_gasteria_DIF_1k.jpg'),
          require('../../../app/cactus_ceramic_blue_DIF_1k.jpg'),
        ]}
        position={[-0.0, -5.5, -1.15]}
        type="OBJ"
      /> */}
      {/* <ViroBox
        position={[0, -0.5, -1]}
        scale={[0.3, 0.3, 0.1]}
        materials={['grid']}
      /> */}
    </ViroARScene>
  );
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'red',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
