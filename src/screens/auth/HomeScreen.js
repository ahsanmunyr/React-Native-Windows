import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {memo, useMemo, useCallback, useState, useEffect} from 'react';
import Header from '../../components/Header';
import {COLORS} from '../../constant/theme';
import {Popup, StyleSheet} from 'react-native-windows';
import Items from './ListingComponents/Items';
import {productArray} from '../../constant/data';
import {connect} from 'react-redux';
import categoryRed from '../../store/reducer/categoryRed';
import * as categoryAct from '../../store/actions/categoriesAct';
import * as dishListAct from '../../store/actions/dishlistAct';
import otpRed from '../../store/reducer/otpRed';
import Loading from '../../components/Loading';
import DishItem from '../../components/DishItem';
import ContainModal from './sheets/ContainModal';
import SheetDataWithVariant from '../../components/SheetDataWithVariant';
import SheetDataVariant from '../../components/SheetDataVariant';

const arrayData = [
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
  {
    ApplyDiscount: true,
    ApplyGST: true,
    BarCode: '0077',
    CategoryId: '30858052-6c0b-4a3f-bb6c-1d30321d31c9',
    Discription: '',
    DishId: '0f67233d-9a81-4ff9-980c-c9f0d18ebe17',
    DishName: 'Lemon Tart (Mini)',
    GstAmount: 26.46,
    ImageURL:
      'http://www.bocpos.com.asp1-101.phx1-1.websitetestlink.com/Content/assets/images/no-image-icon.png',
    InMinut: 0,
    InSec: 0,
    IsDeal: false,
    IsPriceWithGST: true,
    PlaceId: '806e7e23-d65c-435e-85da-34ab25bae579',
    PriceStartFrom: 203.54,
    PriceWithGST: 230,
    TotalPrice: 203.54,
    Variants: [],
    WeightInGram: '',
  },
];

const HomeScreen = ({
  TabBarWidth,
  categoryRed,
  categoryAct,
  otpRed,
  dishListRed,
  dishListAct,
}) => {
  const {width, height} = useWindowDimensions();
  const [fields, setFields] = useState({
    products: {},
    loader: false,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [category, onSetCategory] = useState({});
  const [dishList, onSetDishlist] = useState([]);

  const onChangeValue = useCallback(
    (mode, text) => {
      setFields(prev => ({...fields, [mode]: text}));
    },
    [fields],
  );

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onAddSticker1 = () => {
    setIsModalVisible1(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onModalClose1 = () => {
    setIsModalVisible1(false);
  };

  useEffect(() => {
    if (category?.CategoryId != 1 && category.CategoryId != undefined) {
      console.log(category.CategoryId, '1');
      let dishList = dishListRed?.DishList;
      let val = dishList?.filter(
        item => item?.CategoryId === category?.CategoryId,
      );
      onSetDishlist(val);
    } else {
      onSetDishlist(dishListRed?.DishList);
    }
  }, [category, dishListRed?.DishList]);

  useEffect(() => {
    if (otpRed.hasOwnProperty('PlaceId')) {
      onChangeValue('loader', true);
      Promise.all([
        categoryAct(otpRed['PlaceId'], otpRed?.UserData['Token']),
        dishListAct(otpRed['PlaceId'], otpRed?.UserData['Token']),
      ])
        .then(res => {
          console.log(res, '========');
          onChangeValue('loader', false);
        })
        .catch(err => {
          onChangeValue('loader', false);
          console.log(err, '=======');
        });
    }
  }, []);

  const apiLoader = useMemo(() => fields['loader'], [fields]);
  const productID = useMemo(() => fields['products'], [fields]);

  if (apiLoader) {
    return (
      <Loading main={true} />
    );
  }

  function renderItem({item, index}) {
    return (
      <DishItem
        index={index}
        item={item}
        setData={setItemData}
        openModal={onAddSticker}
        openModal1={onAddSticker1}

      />
    );
  }
 
  function headerComponent() {
    return (
      <View style={styles.ChildContainer}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {categoryRed?.FoodCategories?.map((item, index) => {
            return (
              <Items
                index={index}
                item={item}
                setProducts={onChangeValue}
                products={productID}
                onSetCategory={onSetCategory}
              />
            );
          })}
        </View>
      </View>
    );
  }

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
        <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
          <FlatList
            // data={dishList}
            ListHeaderComponent={headerComponent()}
            data={dishList}
            keyExtractor={(item, id) => id.toString()}
            numColumns={6}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <ContainModal isVisible={isModalVisible} payload={itemData} onClose={onModalClose}>
          <SheetDataWithVariant payload={itemData}  />
      </ContainModal>
      <ContainModal isVisible={isModalVisible1} payload={itemData} onClose={onModalClose1}>
          <SheetDataVariant payload={itemData}  />
      </ContainModal>
    </View>
  );
};

function mapStateToProps({categoryRed, otpRed, dishListRed}) {
  return {
    categoryRed,
    otpRed,
    dishListRed,
  };
}

export default connect(mapStateToProps, {...categoryAct, ...dishListAct})(
  memo(HomeScreen),
);

const styles = StyleSheet.create({
  main: {
    height: '100%',
    alignSelf: 'flex-end',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  ChildContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },
});
