import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
const DashboardScreen = ({TabBarWidth}) => {
  // console.log(TabBarWidth, "TabBarWidth")
  const {width, height,fontScale} = useWindowDimensions();
  // console.log(width, "width")
  return (
    <View style={{height: '100%',  width: width-TabBarWidth, alignSelf:'flex-end'}}>
      <Header width={width-TabBarWidth} title={'Dashboard'} />
    </View>
  );
};

export default memo(DashboardScreen);

const styles = StyleSheet.create({});
