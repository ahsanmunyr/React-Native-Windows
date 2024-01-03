import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {COLORS} from '../constant/theme';
import { Checkbox } from '@fluentui/react-native';


const VariantItem = ({item, index}) => {
  const [count, onSetCount] = useState(0);
  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Checkbox label={item?.Text} c />

      <View style={styles.firstHalfVariant}>
        <TouchableOpacity
          onPress={() => {
            if (count > 0) {
              onSetCount(pre => pre - 1);
            }
          }}
          style={styles.increaseDescreaseVariant}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../assets/minus.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Medium',
            fontSize: responsiveScreenFontSize(0.8),
          }}>
          {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (count >= 0) {
              onSetCount(pre => pre + 1);
            }
          }}
          style={styles.increaseDescreaseVariant}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VariantItem;

const styles = StyleSheet.create({
  firstHalf: {
    width: '35%',
    height: responsiveScreenHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  firstHalfVariant: {
    width: '35%',
    height: responsiveScreenHeight(4),
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
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  increaseDescreaseVariant: {
    width: responsiveScreenHeight(2),
    height: responsiveScreenHeight(2),
    borderRadius: responsiveScreenFontSize(10),
    // backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: responsiveScreenFontSize(10),
    borderRadius: responsiveScreenFontSize(2),
    alignSelf: 'center',
    borderWidth: 1,
    paddingHorizontal: responsiveScreenFontSize(1),
    borderColor: 'grey',
    marginVertical: responsiveScreenFontSize(1),
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  contain: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '70%',
    fontFamily: 'Poppins-ExtraBold',
    color: 'black',
    fontSize: responsiveScreenFontSize(2.5),
  },
  price: {
    width: '30%',
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: responsiveScreenFontSize(1.5),
  },
  descriptionBox: {
    width: '90%',
    alignSelf: 'center',
  },

  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: responsiveScreenFontSize(1.5),
  },
  middleContain: {
    width: '90%',
    // height: responsiveScreenFontSize(20),

    backgroundColor: '#f8f8f8',
    alignSelf: 'center',
    marginVertical: responsiveScreenFontSize(2),
    paddingVertical: responsiveScreenFontSize(2),
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
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 12,
    alignSelf: 'center',
    paddingVertical: 12,
  },
});
