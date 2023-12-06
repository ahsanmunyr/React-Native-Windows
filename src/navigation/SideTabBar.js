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
import React, {memo, useState} from 'react';
import {Avatar, BackgroundImage} from '../constant/images';
import {
  responsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';
// import { AppSplashImage } from './constant/images';
import {connect} from 'react-redux';
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
import {ImageBackground} from 'react-native-windows';


const {
  HomeScreen,
  DashboardScreen,
  UsersListScreen,
  NotificationScreen,
  ProfileScreen,
} = AuthScreen;

function ProfileContainer({TabBarWidth}) {
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

function renderIcon(label, isFocused, TabBarWidth) {
  function IconSource({forcusIcon, unForcusIcon, isFocusedBool}) {
    return (
      <View
        style={[
          styles.iconView,
          {
            backgroundColor: isFocusedBool ? COLORS.primary : '#fafafa',
            width: TabBarWidth,
          },
        ]}>
        <Image
          style={styles.iconImage}
          source={isFocusedBool ? forcusIcon : unForcusIcon}
        />
        {TabBarWidth == 200 && (
          <Text
            style={{
              fontSize: isFocused ? 13 : 11,
              width: 100,
              color: isFocusedBool ? 'white' : 'black',
              fontWeight: isFocusedBool ? '600' : '300',
            }}>
            {label}
          </Text>
        )}
      </View>
    );
  }
  switch (label) {
    case 'Dashboard':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Home}
          unForcusIcon={tab_icon.Home}
          isFocusedBool={isFocused}
        />
      );

    // case 'Profile':
    //   return <ProfileContainer TabBarWidth={TabBarWidth} />;
    case 'Home':
      return (
        <IconSource
          forcusIcon={tab_icon_focus.Bell}
          unForcusIcon={tab_icon.Bell}
          isFocusedBool={isFocused}
        />
      );
    case 'Users':
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

function MyTabBar({state, descriptors, navigation, TabBarWidth}) {
  return (
    <View style={[styles.bar, {width: TabBarWidth}]}>
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
            {renderIcon(label, isFocused, TabBarWidth)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function SideTabBar({drawableWidthRed}) {
  // const [TabBarWidth, onChangeTabBarWidth] = useState(200);
  // console.log(drawableWidthRed.width, '========');
  var TabBarWidth = drawableWidthRed.width;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} TabBarWidth={TabBarWidth} />}>
      {/* <Tab.Screen name="Profile">
        {props => <ProfileScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen> */}
      <Tab.Screen name="Dashboard">
        {props => <DashboardScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Home">
        {props => <HomeScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Users">
        {props => <UsersListScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="Notifications">
        {props => <NotificationScreen TabBarWidth={TabBarWidth} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function mapStateToProps({drawableWidthRed}) {
  return {
    drawableWidthRed,
  };
}

export default connect(mapStateToProps, null)(memo(SideTabBar));
// export default memo(SideTabBar);

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
    backgroundColor: '#fafafa',
  },
  iconView: {
    // width: 180,
    height: 60,
    // borderRadius: genericRatio(50),
    backgroundColor: '#fafafa',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  bar: {
    flexDirection: 'column',
    // height: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRightWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#afa7fa',
    // opacity: 0.9,
    // height: genericRatio(60),
  },
  tabBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 80,
    // height: genericRatio(60),
    backgroundColor: '#fafafa',
  },
});
