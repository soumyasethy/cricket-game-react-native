import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import React from 'react';

export const CTAButton = (props) => (
  <View>
    <TouchableOpacity onPress={props?.onPress}>
      <View style={styles.borderContainer}>
        <Text>{props?.primaryText}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
