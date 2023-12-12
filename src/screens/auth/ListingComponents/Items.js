import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS} from '../../../constant/theme';
import {Pressable} from 'react-native-windows';

const Items = ({index, item, setProducts, products}) => {
  console.log(item, "item")
  return (
    <Pressable onPress={() => setProducts('products', item)}>
      <View
        key={index}
        style={{
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderWidth: 1,
          borderColor: COLORS.primary,
          backgroundColor: products.CategoryId == item.CategoryId          ? '#f0f0f0' : 'white',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
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
