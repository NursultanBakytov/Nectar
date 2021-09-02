import React from 'react';
import {Image, TextInput, View} from 'react-native';

const SearchBar = ({...props}) => {
  return (
    <View
      style={{
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgba(242,243,242,1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <Image source={require('../../assets/search.png')} />

      <TextInput
        style={{paddingHorizontal: 8, fontSize: 14, fontWeight: '600'}}
        placeholder="Search Store"
        placeholderTextColor="rgba(124,124,124,1)"
        {...props}
      />
    </View>
  );
};

export default SearchBar;
