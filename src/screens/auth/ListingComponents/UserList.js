import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const UserList = ({index, item}) => {
  console.log(item, '============');
  return (
    <View key={item.Id} style={{margin: 15}}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: 12,
          paddingVertical: 12,
          flexDirection: 'row',
        }}>
        <Text>
          {item?.FirstName}
          {' '} {item?.LastName}
        </Text>
      </View>
    </View>
  );
};

export default memo(UserList);

const styles = StyleSheet.create({});
