import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
const ProfileScreen = ({TabBarWidth}) => {
  // console.log(TabBarWidth, "TabBarWidth")
  const {width, height,fontScale} = useWindowDimensions();
  // console.log(width, "width")
  return (
    <View style={{height: '100%',  width: width-TabBarWidth, alignSelf:'flex-end'}}>
      <Text>Profile</Text>
    </View>
  );
};

export default memo(ProfileScreen);

const styles = StyleSheet.create({});
