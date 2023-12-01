import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';

const NotificationScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
      <Text>NotificationScreen</Text>
    </View>
  );
};

export default memo(NotificationScreen);

const styles = StyleSheet.create({});
