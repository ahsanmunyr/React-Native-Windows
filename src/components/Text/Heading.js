import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Heading = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  textStyle: {fontSize: responsiveFontSize(2.5), fontWeight: '600'},
});
