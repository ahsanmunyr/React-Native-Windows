import LoginScreen from './nonauth/LoginScreen';
import WalkthroughScreen from './nonauth/WalkthroughScreen';
import HomeScreen from './auth/HomeScreen';
import DashboardScreen from './auth/DashboardScreen';
import UsersListScreen from './auth/UsersListScreen';
import NotificationScreen from './auth/NotificationScreen';
import ProfileScreen from './auth/ProfileScreen';
import OTPScreen from './nonauth/OTPScreen';

export const AuthScreen = {
  HomeScreen,
  DashboardScreen,
  UsersListScreen,
  NotificationScreen,
  ProfileScreen
};

export const NonAuthScreen = {
  LoginScreen,
  WalkthroughScreen,
  OTPScreen
};
