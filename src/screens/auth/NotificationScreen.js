import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import Header from '../../components/Header';

const NotificationScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
      <Header width={width - TabBarWidth} title={'Notification'} />
      <View
        style={{
          height: 250,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}></View>
    </View>
  );
};

export default memo(NotificationScreen);

const styles = StyleSheet.create({});
