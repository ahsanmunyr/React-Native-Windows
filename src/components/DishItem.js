import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../constant/theme';
// import {COLORS} from '../constant/theme';

const DishItem = ({index, item, openModal, setData, openModal1}) => {
  // const [fadeAnim] = useState(new Animated.Value(0.8));
  // const [scaleValue] = useState(new Animated.Value(1));

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.8,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Animated.timing(scaleValue, {
      toValue: scaleValue._value + 0.1,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true, // Enable the native driver for performance
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: scaleValue._value - 0.1,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true, // Enable the native driver for performance
    }).start();
  };

  return (
    <View
      onMouseEnter={() => {
        // fadeIn();
        // handlePress();
      }}
      onMouseLeave={() => {
        // fadeOut();
        // handlePressOut();
      }}
      style={{
        width: '19.2%',
        height: responsiveScreenHeight(25),
        marginHorizontal: responsiveFontSize(0.3),
        marginVertical: responsiveFontSize(0.3),
        borderRadius: responsiveFontSize(1),
        backgroundColor: COLORS.primary,
        // opacity: fadeAnim,
      }}>
      <Pressable
        onPress={() => {
          setData(item);
          if(item?.Variants.length == 0){
            openModal()
          }
          if(item?.Variants.length == 1){
            openModal1();
          }
        }}
        key={index}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            borderRadius: responsiveFontSize(1),
          }}>
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 15,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveScreenFontSize(0.8),
                fontFamily: 'Poppins-Medium',
                fontWeight: '600',
              }}>
              {item?.DishName}
            </Text>
          </View>
          <Image
            width={190}
            height={190}
            // style={{transform: [{scale: scaleValue}]}}
            resizeMode="contain"
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png',
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            paddingHorizontal: 8,
            paddingVertical: 3,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveScreenFontSize(0.7),
              fontFamily: 'Poppins-Medium',
              fontWeight: '700',
            }}>
            Rs. {(item?.PriceWithGST).toFixed(2)}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default DishItem;

const styles = StyleSheet.create({});
