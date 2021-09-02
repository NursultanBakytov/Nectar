import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_COLORS} from '../../styles/colors';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.GREEN,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default CustomButton;
