import {View, Text, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import Header from '../../components/Header';
import {COLORS} from '../../constant/theme';
import {StyleSheet} from 'react-native-windows';

const HomeScreen = ({TabBarWidth}) => {
  const {width, height} = useWindowDimensions();
  
  return (
    <View
      style={[
        styles.main,
        {
          width: width - TabBarWidth,
        },
      ]}>
      <Header width={width - TabBarWidth} title={'Home'} />
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}></View>
      </View>
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignSelf: 'flex-end',
  },
  mainContainer: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRightWidth: 2,
    borderColor: COLORS.primary,
  },
  rightContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
  },
});
