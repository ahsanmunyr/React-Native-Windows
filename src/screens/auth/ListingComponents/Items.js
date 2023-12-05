import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {COLORS} from '../../../constant/theme';
import {Pressable} from 'react-native-windows';

const Items = ({index, item, setProducts, products}) => {
  return (
    <Pressable onPress={() => setProducts('products', item)}>
      <View
        key={index}
        style={{
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderWidth: 1,
          borderColor: COLORS.primary,
          backgroundColor: products.id == item.id ? '#f0f0f0' : 'white',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default memo(Items);

const styles = StyleSheet.create({});
