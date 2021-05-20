import {ActivityIndicator, View, Text} from 'react-native';

import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

export const RenderLoading = props => {
  if (props.isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="#8AD169"
        style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0}}
      />
    );
  } else {
    return null;
  }
};

export const AnimationLoading = props => {
  if (props.isLoading) {
    return (
      <>
        <LottieView
          source={require('../../assets/animation/multiple.json')}
          autoPlay
          loop
          style={
            ({
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            },
            styles.lottieimage)
          }
        />
        <Text
          style={{
            position: 'absolute',
            bottom: 150,
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: 30,
            color: '#29582C',
            fontWeight: '700',
          }}>
          loading ...
        </Text>
      </>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  lottieimage: {
    width: '100%',
    height: '100%',
    paddingVertical: 5,
    zIndex: -1,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
