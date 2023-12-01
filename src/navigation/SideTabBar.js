import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawable} from '../components';
import {AuthScreen} from '../screens';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {memo} from 'react';
import {Avatar} from '../constant/images';
import {
  responsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  BOTTOMSHEET_BUTTON,
  CANCEL_INDEX,
  DESTRUCTIVE_INDEX,
  genericRatio,
  openCamera,
  pickImageFromGallery,
  screenNavigation,
} from '../helper/helper';
import {tab_icon, tab_icon_focus} from '../constant/icon';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, commonStyles} from '../constant/theme';

var TabBarWidth = 200;
const {
  HomeScreen,
  DashboardScreen,
  SettingScreen,
  NotificationScreen,
  ProfileScreen,
} = AuthScreen;

function ProfileContainer() {
  return (
    <View style={[styles.profileTab, {width: TabBarWidth}]}>
      <Image source={Avatar} style={styles.profileImage} />
      <View>
        <Text style={{fontWeight: '600', width: 90}}>Ahsan Munir</Text>
        <View style={styles.profileContent}>
          <View style={styles.profileInnerContent} />
          <Text style={{fontSize: 9}}>{'  '}Online</Text>
        </View>
      </View>
    </View>
  );
}

function renderIcon(label, isFocused) {
  function IconSource({forcusIcon, unForcusIcon, isFocusedBool}) {
    return (
      <View
        style={[
          styles.iconView,
          {backgroundColor: isFocusedBool ? COLORS.primary : 'white'},
        ]}>
        <Image
          style={styles.iconImage}
          source={isFocusedBool ? forcusIcon : unForcusIcon}
        />
        <Text
          style={{
            fontSize: isFocused ? 13 : 11,
            width: 100,
            color: isFocusedBool ? 'white' : 'black',
            fontWeight: isFocusedBool ? '600' : '300',
          }}>
          {label}
        </Text>
      </View>
    );
  }
  switch (label) {
    case 'Profile':
      return <ProfileContainer />;
    case 'Dashboard':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Home}
          unForcusIcon={tab_icon.Home}
          isFocusedBool={isFocused}
        />
      );
    case 'Home':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Bell}
          unForcusIcon={tab_icon.Bell}
          isFocusedBool={isFocused}
        />
      );
    case 'Settings':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Profile}
          unForcusIcon={tab_icon.Profile}
          isFocusedBool={isFocused}
        />
      );
    case 'Notifications':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Menu}
          unForcusIcon={tab_icon.Menu}
          isFocusedBool={isFocused}
        />
      );
    default:
      return <View />;
  }
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.bar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBtn}>
            {renderIcon(label, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function SideTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Profile">
        {props => <ProfileScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Dashboard">
        {props => <DashboardScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Home">
        {props => <HomeScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {props => <SettingScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Notifications">
        {props => <NotificationScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default memo(SideTabBar);

const styles = StyleSheet.create({
  profileContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 90,
  },
  profileInnerContent: {
    height: 9,
    width: 9,
    backgroundColor: 'green',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: responsiveFontSize(50),
  },
  profileTab: {
    height: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  iconView: {
    width: 200,
    height: 60,
    // borderRadius: genericRatio(50),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  bar: {
    flexDirection: 'column',
    // height: '100%',
    height: '100%',
    backgroundColor: 'white',
    width: TabBarWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    // height: genericRatio(60),
  },
  tabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 80,
    // height: genericRatio(60),
    backgroundColor: 'white',
  },
});
