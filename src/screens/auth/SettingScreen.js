import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';

const SettingScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default memo(SettingScreen);

const styles = StyleSheet.create({});
