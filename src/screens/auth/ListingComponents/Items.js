import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS} from '../../../constant/theme';
import {Pressable} from 'react-native-windows';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Items = ({index, item, setProducts, products, onSetCategory}) => {
  // console.log(index, 'item');
  return (
    <Pressable
      onPress={() => {
        onSetCategory(item)
        setProducts('products', item);
      }}>
      <View
        key={index}
        style={{
          paddingHorizontal: responsiveFontSize(0.5),
          paddingVertical: responsiveFontSize(0.2),
          margin: responsiveFontSize(0.2),
          borderWidth: responsiveFontSize(0.1),
          borderRadius: responsiveFontSize(1),
          borderColor: COLORS.primary,
          backgroundColor:
            products.CategoryId == item.CategoryId ? 'white' : COLORS.primary,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Assets/Poppins-Medium.ttf#Poppins',
            color:
              products.CategoryId == item.CategoryId ? COLORS.primary : 'white',
            fontWeight: '600',
          }}>
          {item.CategoryName}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(Items);

const styles = StyleSheet.create({});
