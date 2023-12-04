import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import Header from '../../components/Header';

const SettingScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
    style={{
      height: '100%',
      width: width - TabBarWidth,
      alignSelf: 'flex-end',
    }}>
    <Header width={width - TabBarWidth} title={'Settings'} />
    <View
      style={{
        height: 250,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>

        

    </View>
  </View>
  );
};

export default memo(SettingScreen);

const styles = StyleSheet.create({});
