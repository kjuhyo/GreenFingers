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
import pizzaObj from '../../13917_Pepperoni_v2_l2.obj';
import pizzaMtl from '../../13917_Pepperoni_v2_l2.mtl';
import pizzaDiffuse from '../../13917_Pepperoni_diffuse.jpg';
import pizzaPlate from '../../plate_diffuse.jpg';

const physicsBody = {
  type: 'Dynamic',
  mass: 25,
  enabled: true,
  useGravity: true,
  restitution: 0.35,
  friction: 0.75,
};

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
      {/* <ViroText
        text="Hello World"
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
      <Viro3DObject
        position={[0, 0, -1]}
        scale={[0.008, 0.008, 0.008]}
        rotation={[90, 90, 180]}
        source={require('../../13917_Pepperoni_v2_l2.obj')}
        resources={[
          require('../../13917_Pepperoni_v2_l2.mtl'),
          require('../../13917_Pepperoni_diffuse.jpg'),
          require('../../plate_diffuse.jpg'),
        ]}
        type="OBJ"
        dragType="FixedDistance"
        onDrag={() => {}}
      />

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
