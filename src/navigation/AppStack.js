import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, NonAuthScreen} from '../screens/index.js';

const {WalkthroughScreen, LoginScreen} = NonAuthScreen;

const Stack = createNativeStackNavigator();



const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WalkthroughScreen">
        <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
