import {ActivityIndicator} from 'react-native';
import React from 'react';

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
