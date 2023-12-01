import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({width, title}) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: 'white',
        width: width,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
