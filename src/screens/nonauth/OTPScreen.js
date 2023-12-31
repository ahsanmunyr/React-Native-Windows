import {
  View,
  useColorScheme,
  PlatformColor,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
} from 'react-native';
import React, {useState, useMemo, useCallback, memo} from 'react';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from 'react-native-responsive-dimensions';
import {Revaki_logo} from '../../constant/images';
import {TextInput, Text} from 'react-native-windows';
import Heading from '../../components/Text/Heading';
import ButtonWithHoverEffect from '../../components/WindowsBtn/ButtonWithHoverEffect';
import {screenNavigation} from '../../helper/helper';
import {COLORS} from '../../constant/theme';
import {OtpInput} from 'react-native-otp-entry';
import {connect} from 'react-redux';
import * as loginRed from '../../store/reducer/loginRed';
import * as otpAct from '../../store/actions/otpAct';
import Loading from '../../components/Loading';
const OTPScreen = ({navigation, loginRed, otpAct}) => {
  const [fields, setFields] = useState({
    otp: '',
    apiCalling: false,
  });


  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const sendServerCheckOTP = useCallback(code => {
    onChangeValue('apiCalling', true);
    onChangeValue('otp', code);
    const {Token} = loginRed?.UserData
    if (code.length === 4) {
      otpAct(code, Token).then(res => {
        const {Status, Message} = res;
        if (Status) {
          screenNavigation(navigation, 'SideTabBar')
          // console.warn("DONE");
        } else {
          console.warn(Message);
          screenNavigation(navigation, 'LoginScreen')
        }
        onChangeValue('apiCalling', false);
      });

    }
  }, []);

  const apiCall = useMemo(() => fields['apiCalling'], [fields]);
  return (
    <View style={styles.main}>
      <View style={styles.innerMain}>
        <View style={[styles.container]}>
          <View style={styles.contentContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 340,
              }}>
              <Image
                source={Revaki_logo}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text style={{color: 'grey', fontWeight: '600', fontSize: 18}}>
                Enter verification code
              </Text>
            </View>
            {!apiCall ? (
              <OtpInput
                numberOfDigits={4}
                focusColor={COLORS.primary}
                focusStickBlinkingDuration={500}
                onTextChange={sendServerCheckOTP}
                theme={{
                  containerStyle: {
                    width: 280,
                    alignSelf: 'center',
                  },
                  inputsContainerStyle: {},
                  pinCodeContainerStyle: {
                    width: 60,
                  },
                }}
              />
            ) : (
              <Loading />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps({loginRed}) {
  return {
    loginRed,
  };
}

export default connect(mapStateToProps, otpAct)(memo(OTPScreen));
// export default memo(OTPScreen);

const styles = StyleSheet.create({
  OTP: {width: '80%', flexDirection: 'row', justifyContent: 'space-between'},
  OTPCodeBox: {
    width: 50,
    height: 50,
    backgroundColor: '#F3F4F6',
    color: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: '#E5E7EB',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  innerMain: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 400,
    paddingHorizontal: 30,
    height: 300,
  },
  logo: {width: 120, height: 120},
  viewComponent: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 400,
    height: 300,
    borderRadius: responsiveFontSize(0.1),
    backgroundColor: 'white',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 400,
    height: 50,
    borderRadius: responsiveFontSize(0.1),
    backgroundColor: 'white',
  },
});
