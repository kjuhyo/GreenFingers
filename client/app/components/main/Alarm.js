import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const Alarm = props => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <View>
      <Text>drawer</Text>
    </View>
  );
};
export {Alarm};
