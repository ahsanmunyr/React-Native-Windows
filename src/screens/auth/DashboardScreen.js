import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {ScrollView} from 'react-native-windows';
const DashboardScreen = ({TabBarWidth}) => {
  const {width, height, fontScale} = useWindowDimensions();
  // console.log(width, 'width');
  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
        {/* <Text>Dashboard</Text> */}
      <Header width={width - TabBarWidth} title={'Dashboard'} />
      <View
        style={{
          height: 250,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          // flexWrap:'wrap',
          // backgroundColor:'red'
        }}>
  
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>

      </View>
    </View>
  );
};

export default memo(DashboardScreen);

const styles = StyleSheet.create({
  box: {
    width: 180,
    height: 150,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
});
