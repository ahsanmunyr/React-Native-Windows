import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {tablet} from '../theme/Platform';
import {Checkbox} from '@fluentui/react-native';

// import BouncyCheckbox from "react-native-bouncy-checkbox";
import {COLORS} from '../constant/theme';
// import Icon, { Icons } from "../../components/Icons";
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {AntDesign} from '../constant/icon';

const SheetDataWithVariant = ({payload}) => {
  const [count, onSetCount] = useState(0);

  function flatListHeader() {
    return (
      <View style={{width: '95%', flexDirection: 'row', alignSelf:'center'}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png',
            }}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={styles.contain}>
          <Text style={styles.heading}>{payload?.DishName}</Text>
          <Text style={styles.price}>from Rs. {payload?.TotalPrice}</Text>
          <Text numberOfLines={3} style={styles.description}>
            040Z Cheese burger with lettuce ,tomato, 75DH signature sauce &
            pickles can be added
            040Z Cheese burger with lettuce ,tomato, 75DH signature sauce &
            pickles can be added
            040Z Cheese burger with lettuce ,tomato, 75DH signature sauce &
            pickles can be added
          </Text>
        </View>
      </View>
    );
  }

  function flatListFooter() {
    return (
      <>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'column',
          }}>
          <View style={{marginVertical: responsiveScreenFontSize(1)}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1),
              }}>
              Special instructions
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(0.75),
              }}>
              Please let us know if you are allergic to anything or if we need
              to avoid anything
            </Text>
          </View>
          <TextInput
            multiline
            textAlignVertical="top"
            placeholder="e.g. no mayo"
            style={styles.textInput}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.firstHalf}>
            <Pressable
              onPress={() => {
                if (count > 0) {
                  onSetCount(pre => pre - 1);
                }
              }}
              style={styles.increaseDescrease}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/minus.png')}
              />
            </Pressable>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-Medium',
                fontSize: responsiveScreenFontSize(1),
              }}>
              {count}
            </Text>
            <Pressable
              onPress={() => {
                if (count >= 0) {
                  onSetCount(pre => pre + 1);
                }
              }}
              style={styles.increaseDescrease}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../assets/plus.png')}
              />
            </Pressable>
          </View>
          <View
            style={{
              width: '60%',
              height: responsiveScreenHeight(8),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: responsiveScreenFontSize(0.5),
                width: '60%',
                height: responsiveScreenHeight(5),
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: responsiveScreenFontSize(1),
                  fontFamily: 'Poppins-Medium',
                }}>
                Add to cart
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {flatListHeader()}
      <View style={styles.middleContain}>
        <>
          <View style={styles.middleContainerHeader}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Medium',
                  fontSize: responsiveScreenFontSize(1),
                }}>
                Frequently bought together
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: responsiveScreenFontSize(0.75),
                }}>
                Other customers also ordered these
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#ededed',
                padding: 10,
                borderRadius: responsiveFontSize(2),
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontFamily: 'Poppins-Medium',
                  fontSize: responsiveScreenFontSize(0.6),
                }}>
                Optional
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '95%',
              // backgroundColor: 'red',
              alignSelf: 'center',
            }}>
            <Checkbox label="Jalapeno Chicken Sandwich  + Rs 595.00" />
            <Checkbox label="Spicy Cheese Fries  + Rs 415.00" />
            <Checkbox label="Beverage (Can)  + Rs 120.00" />
          </View>
        </>
      </View>
      {flatListFooter()}
    </ScrollView>
  );
};

export default SheetDataWithVariant;

const styles = StyleSheet.create({
  firstHalf: {
    width: '35%',
    height: responsiveScreenHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '90%',
    height: responsiveScreenHeight(8),
    alignSelf: 'center',
    marginVertical: responsiveScreenFontSize(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveScreenFontSize(2),
  },
  increaseDescrease: {
    width: responsiveScreenHeight(3),
    height: responsiveScreenHeight(3),
    borderRadius: responsiveScreenFontSize(10),

    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: responsiveScreenFontSize(4),
    borderRadius: responsiveScreenFontSize(0.5),
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: responsiveScreenFontSize(0.2),
    borderColor: 'grey',
    marginVertical: responsiveScreenFontSize(0.3),
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  contain: {
    flexDirection: 'column',
    // width: "90%",
    height: 150,
    justifyContent: 'center',
    // alignSelf: "center",
    alignItems: 'flex-start',
    //   backgroundColor:'red'
  },
  heading: {
    //   width: '70%',
    fontFamily: 'Poppins-ExtraBold',
    color: 'black',
    fontWeight: '700',
    fontSize: responsiveScreenFontSize(1.5),
  },
  price: {
    //   width: '20%',
    fontFamily: 'Poppins-Medium',
    // color: "black",
    fontSize: responsiveScreenFontSize(0.8),
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
  },

  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveScreenFontSize(0.7),
    width: 500,
    color:'grey',
    // backgroundColor:'red'
  },
  middleContain: {
    width: '90%',
    // height: responsiveScreenFontSize(20),

    backgroundColor: '#f8f8f8',
    alignSelf: 'center',
    marginVertical: responsiveScreenFontSize(0.5),
    paddingVertical: responsiveScreenFontSize(0.5),
    borderRadius: responsiveScreenFontSize(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  middleContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
