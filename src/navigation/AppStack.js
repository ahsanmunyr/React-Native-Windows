import React from 'react';
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
import {Provider} from 'react-redux';
import {store} from '../store/index';
const {WalkthroughScreen, LoginScreen} = NonAuthScreen;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

const AppStack = () => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="WalkthroughScreen"
            component={WalkthroughScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SideTabBar" component={SideTabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const Main = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppStack />
    </GestureHandlerRootView>
  );
};

export default Main;
