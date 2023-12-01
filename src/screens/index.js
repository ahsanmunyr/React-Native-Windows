import LoginScreen from './nonauth/LoginScreen';
import WalkthroughScreen from './nonauth/WalkthroughScreen';
import HomeScreen from './auth/HomeScreen';
import DashboardScreen from './auth/DashboardScreen';
import SettingScreen from './auth/SettingScreen';
import NotificationScreen from './auth/NotificationScreen';
import ProfileScreen from './auth/ProfileScreen';
export const AuthScreen = {
  HomeScreen,
  DashboardScreen,
  SettingScreen,
  NotificationScreen,
  ProfileScreen
};

export const NonAuthScreen = {
  LoginScreen,
  WalkthroughScreen,
};
