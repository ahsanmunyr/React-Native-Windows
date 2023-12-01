import {View, Text, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';

const HomeScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default memo(HomeScreen);
