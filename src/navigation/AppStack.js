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
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/auth/DashboardScreen';
import SideTabBar from './SideTabBar';
const {WalkthroughScreen, LoginScreen} = NonAuthScreen;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const DrawableStack = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="WalkthroughScreen">
//         <Drawer.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
//         <Drawer.Screen name="LoginScreen" component={LoginScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SideTabBar">
        <Stack.Screen name="WalkthroughScreen" component={WalkthroughScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SideTabBar" component={SideTabBar} />
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
