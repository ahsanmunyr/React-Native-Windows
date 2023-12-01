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
import React, {useState, useMemo, useCallback,memo} from 'react';
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
import { screenNavigation } from '../../helper/helper';

const LoginScreen = ({navigation}) => {
  const [fields, setFields] = useState({
    email: 'admin@kohicoffees.pk',
    password: '',
    onHover: false,
    NextBtn: false,
  });
  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  // const [onHover, setOnHover] = useState(false);

  const ShowHoverEffect = useMemo(() => fields['onHover'], [fields]);
  const ShowNextBtnEffect = useMemo(() => fields['NextBtn'], [fields]);
  const textValuePassword = useMemo(() => fields['password'], [fields]);
  const textValueEmail = useMemo(() => fields['email'], [fields]);

  const NextFunc = useCallback(()=>{
    
    screenNavigation(navigation, 'SideTabBar');
  })

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
            <Heading text={'Sign in'} />
            <TextInput
              placeholder="Email Address"
              caretHidden={false}
              style={{width: 340}}
              onChangeText={text => onChangeValue('email', text)}
              defaultValue={textValueEmail}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              caretHidden={false}
              style={{width: 340}}
              onChangeText={text => onChangeValue('password', text)}
              defaultValue={textValuePassword}
            />
            <View
              onMouseEnter={() => onChangeValue('onHover', true)}
              onMouseLeave={() => onChangeValue('onHover', false)}>
              <Text style={{color: 'gray'}}>
                No account?{' '}
                <Text
                  onPress={() => console.log('hello')}
                  style={{
                    color: 'blue',
                    textDecorationColor: 'blue',
                    textDecorationLine: 'underline',
                    backgroundColor: ShowHoverEffect ? '#f5f8ff' : 'white',
                  }}>
                  Create one!
                </Text>
              </Text>
            </View>
            <ButtonWithHoverEffect
              onPress={NextFunc}
              onMouseEnter={() => onChangeValue('NextBtn', true)}
              onMouseLeave={() => onChangeValue('NextBtn', false)}
              showBtnEffect={ShowNextBtnEffect}
              btnTitle={'Login'}
              btnStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                height: 40,
                width: 80,
              }}
            />
            {/* <View
              onMouseEnter={() => onChangeValue('NextBtn', true)}
              onMouseLeave={() => onChangeValue('NextBtn', false)}
              style={{
                height: 40,
                width: 80,
                backgroundColor: ShowNextBtnEffect ? '#007AFF' : '#2196F3',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveFontSize(1.5),
                  fontWeight: '500',
                }}>
                Next
              </Text>
            </View> */}
          </View>
        </View>
       
      </View>
    </View>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  innerMain: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 500,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: 400,
    paddingHorizontal: 30,
    height: 380,
  },
  logo: {width: 120, height: 120},
  viewComponent: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 400,
    height: 400,
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
