import React, {memo, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import Colors from '../constants/Colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, NonAuthScreen} from '../screens/index.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/auth/DashboardScreen';
import SideTabBar from './SideTabBar';
import {AppSplashImage} from '../constant/images';
import {Provider, connect} from 'react-redux';
import * as otpRed from '../store/reducer/otpRed';

import {store} from '../store/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
// import OTPScreen from '../screens/nonauth/OTPScreen';
const {WalkthroughScreen, LoginScreen, OTPScreen} = NonAuthScreen;

const Stack = createNativeStackNavigator();

const AppStack = ({data}) => {
  // const [login, onChangeLogin] = useState(false);
  // const [loading, onChangeLoading] = useState(false);
  // async function getVal() {
  //   onChangeLoading(true);
  //   let val = await AsyncStorage.getItem('userInfo');
  //   let converted = JSON.parse(val);
  //   console.log(converted['Status'], 'converted');
  //   if (converted['Status'] == true) {
  //     onChangeLogin(true);
  //     console.warn('LOGIN');
  //     onChangeLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getVal();
  // }, []);

  // if (loading) {
  //   return <Loading main={true} />;
  // }

  if (data['Status']) {
    return (
      <Stack.Navigator initialRouteName={'SideTabBar'}>
        <Stack.Screen name="SideTabBar" component={SideTabBar} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'WalkthroughScreen'}>
        <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
      </Stack.Navigator>
    );
  }
};

const Main = ({otpRed}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppStack data={otpRed} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

function mapStateToProps({otpRed}) {
  return {
    otpRed,
  };
}
export default connect(mapStateToProps, null)(Main);
// export default memo(Main);
