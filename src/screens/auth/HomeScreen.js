import {View, Text, useWindowDimensions, FlatList} from 'react-native';
import React, {memo, useMemo, useCallback, useState, useEffect} from 'react';
import Header from '../../components/Header';
import {COLORS} from '../../constant/theme';
import {StyleSheet} from 'react-native-windows';
import Items from './ListingComponents/Items';
import {productArray} from '../../constant/data';
import { connect } from 'react-redux';
import categoryRed from '../../store/reducer/categoryRed';
import * as categoryAct from '../../store/actions/categoriesAct';
import otpRed from '../../store/reducer/otpRed';
import Loading from '../../components/Loading';

const HomeScreen = ({TabBarWidth, categoryRed, categoryAct, otpRed}) => {
  console.log(categoryRed, "categoryRed")
  const {width, height} = useWindowDimensions();
  const [fields, setFields] = useState({
    products: {},
  });
  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const getVal = useCallback(() => {
  
    categoryAct(otpRed['PlaceId'], otpRed?.UserData['Token']).then((res) => {
      console.log(res, "=================")
    });
  });
  
  useEffect(() => {
    getVal();
  }, []);
  

  
  
  const productID = useMemo(() => fields['products'], [fields]);


  return (
    <View
      style={[
        styles.main,
        {
          width: width - TabBarWidth,
        },
      ]}>
      <Header width={width - TabBarWidth} title={'Home'} />
      <View style={styles.mainContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {categoryRed?.FoodCategories?.map((item, index) => {
              return (
                <Items
                  index={index}
                  item={item}
                  setProducts={onChangeValue}
                  products={productID}
                />
              );
            })}
          </View>

          {/* <View style={{width:'auto', height: 300, backgroundColor:'red', position:'relative'}}></View> */}
          {/* <View style={{width:'auto', height: 300, backgroundColor:'red', position:'relative'}}></View> */}

          {/* <FlatList
            data={productArray}
            keyExtractor={item => {
              return item.id;
            }}
            horizontal
            contentContainerStyle={{
              flexWrap:'wrap'
            }}
            renderItem={renderItem}
          /> */}
        </View>
      </View>
    </View>
  );
};


function mapStateToProps({categoryRed,otpRed}){
  return{
    categoryRed,otpRed
  }
}

export default connect(mapStateToProps,categoryAct)(memo(HomeScreen))


const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignSelf: 'flex-end',
  },
  mainContainer: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRightWidth: 2,
    borderColor: COLORS.primary,
  },
  rightContainer: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
  },
});
