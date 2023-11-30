import {View, Text, Image} from 'react-native';
import React, {memo, useEffect} from 'react';
import { screenNavigation } from '../../helper/helper';
import {AppSplashImage} from '../../constant/images';
const WalkthroughScreen = ({navigation}) => {
  let screenName = "LoginScreen"
  useEffect(() => {
    setTimeout(() => {
      screenNavigation(navigation, screenName);
    }, 900),
      [];
  }, []);

  // useEffect(() => {
  //   let screenName = !user.auth ? "Login" : "BottomTabBar"
  //   setTimeout(() => {
  //     screenNavigation(navigation, screenName)
  //   }, 900),[]

  return (
    <Image
      resizeMode="cover"
      source={AppSplashImage}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default memo(WalkthroughScreen);

const styles = StyleSheet.create({
  ImageBackground: {
    height: '100%',
    width: '100%',
  },
});
