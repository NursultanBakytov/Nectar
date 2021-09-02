import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CustomButton} from '../../components/CustomButton';

const Onboarding = (props) => {
  onPressContinue = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.mainView}>
      <Image source={require('../../assets/8140.jpg')} />

      <View style={styles.container}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/logo_white.png')}
        />

        <Text style={styles.welcomeText}>{'Welcome\nto our store'}</Text>

        <Text style={styles.descriptionText}>
          Get your groceries in as fast as one hour
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 90,
    right: 30,
    left: 30,
  },
  logoImage: {
    alignSelf: 'center',
    marginBottom: 35,
  },
  welcomeText: {
    color: 'white',
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center',
  },
  descriptionText: {
    paddingTop: 20,
    paddingBottom: 40,
    color: 'rgba(252,252,252,0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Onboarding;
