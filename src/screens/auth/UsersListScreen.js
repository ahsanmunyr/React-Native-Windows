import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo, useEffect, useState, useCallback} from 'react';
import Header from '../../components/Header';
import * as userDataAct from '../../store/actions/userDataAct';
import * as otpRed from '../../store/reducer/otpRed';
import userDataRed from '../../store/reducer/userDataRed';
import {connect} from 'react-redux';
import Loading from '../../components/Loading';
import {FlatList} from 'react-native-windows';
import {COLORS} from '../../constant/theme';
import UserList from './ListingComponents/UserList';

const UsersListScreen = ({TabBarWidth, userDataAct, otpRed, userDataRed}) => {
  // console.log(userDataRed, 'userDataRed');
  const {width, height} = useWindowDimensions();
  const [loader, onChangeLoader] = useState(false);

  const getVal = useCallback(() => {
    onChangeLoader(true);
    userDataAct(otpRed['PlaceId'], otpRed?.UserData['Token']).then(() => {
      onChangeLoader(false);
    });
  });

  useEffect(() => {
    // getVal();
    // console.log(otpRed, 'otpRed');
  }, []);

  if (loader) {
    return <Loading main={true} />;
  }

  function renderItem({item, index}) {
    return <UserList index={index} item={item} />;
  }

  // console.log(userDataRed, "userDataRed")

  return (
    <View
      style={{
        height: '100%',
        width: width - TabBarWidth,
        alignSelf: 'flex-end',
      }}>
      <Header width={width - TabBarWidth} title={'Users'} />
      {/* <FlatList
        data={userDataRed['UserList']}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{width: '95%', height: 1, backgroundColor: COLORS.primary, alignSelf:'center'}} />
        )}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

function mapStateToProps({otpRed, userDataRed}) {
  return {
    otpRed,
    userDataRed,
  };
}

export default connect(mapStateToProps, userDataAct)(memo(UsersListScreen));

const styles = StyleSheet.create({});
