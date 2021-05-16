import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container} from 'native-base';

export function LoadingScreen() {
  return (
    <Container style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.halftop}>
          <Text style={styles.logotext}>Green</Text>
        </View>
        <View style={styles.halfbottom}>
          <Text style={styles.logotext}>Fingers</Text>
        </View>
      </View>
      <View style={styles.image}>
        <Image
          source={require('../../assets/images/loading.png')}
          style={styles.plantimg}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFBFD',
  },
  logo: {
    flex: 2,
    alignItems: 'flex-start',
    paddingHorizontal: 60,
  },
  halftop: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  halfbottom: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logotext: {
    fontSize: 50,
    fontWeight: '700',
    color: '#29582C',
  },
  signup: {
    fontSize: 12,
    marginTop: 8,
  },
  image: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  plantimg: {
    width: 400,
    height: 400,
    alignSelf: 'stretch',
    padding: 0,
    resizeMode: 'contain',
    transform: [{scale: 2.0}],
    zIndex: -1,
  },
});
