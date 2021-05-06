import React, {Component, useEffect, useState} from 'react';
import Geolocation, {
  getCurrentPosition,
} from 'react-native-geolocation-service';
import {Alert, Text, StyleSheet} from 'react-native';
import {View, Icon} from 'native-base';
import {PermissionsAndroid} from 'react-native';
import axios from 'axios';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Green Fingers',
        message: 'Example App access to your location ',
      },
    );
    console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const Weather = props => {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [condition, setCondition] = useState('');
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [data, setData] = useState([]);
  const API_KEY = '6fcf0b794f725bba2bbcf2a8ce20c07f';

  const fecthData = async () => {
    Geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    console.log('lat', latitude);
    console.log('long', longitude);
    const getWeatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    await fetch(getWeatherApi)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setCondition(result.weather[0].main);
        setHumidity(result.main.humidity);
        setTemp(result.main.temp);
        console.log('res', result);
      });
  };
  console.log('data', data);
  useEffect(async () => {
    await requestLocationPermission();
    await fecthData();
  }, [latitude, longitude]);
  return (
    <View style={styles.now}>
      <View style={styles.middlebox}>
        <Icon type="Ionicons" name="sunny-outline"></Icon>
        <Text style={styles.info}>{condition}</Text>
        <Icon type="Ionicons" name="water-outline"></Icon>
        <Text style={styles.info}>{humidity}%</Text>
        <Icon type="Ionicons" name="thermometer-outline"></Icon>
        <Text style={styles.info}>{temp}°C</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  now: {
    // backgroundColor: "yellow",
    alignItems: 'center',
    marginBottom: 10,
  },
  middlebox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    height: 40,
  },
  info: {
    paddingHorizontal: 15,
    color: 'white',
    fontWeight: '300',
  },
});
export {Weather};
