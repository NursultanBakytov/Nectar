import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Account = (props) => {
  onLogOut = () => {
    props.navigation.replace('LoginNavigation');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          height: 67,
          backgroundColor: 'rgba(242,243,242,1)',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 25,
          borderRadius: 19,
        }}
        onPress={onLogOut}>
        <Image source={require('../../assets/exit.png')} />

        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
            color: 'rgba(83,177,117,1)',
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
