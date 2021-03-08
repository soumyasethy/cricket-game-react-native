import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import {CTAButton} from './cta_button';

export const ResultComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMedium}>{props.message}</Text>
      <View style={{height: 50}} />
      <CTAButton primaryText={'Play Again'} onPress={props.reset} />
    </View>
  );
};
