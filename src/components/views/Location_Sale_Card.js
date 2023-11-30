import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { FONTS, commonStyles } from '../../constant/theme'
import { dateStatusConvertToDate, genericRatio } from '../../helper/helper'
import { homeIcons } from '../../constant/icon'
import HorizontalSpace from './HorizontalSpace'
import VerticalSpace from './VerticalSpace'
import { useHttp } from '../../customHooks'
import LocationSaleCardCollapse from './LocationSaleCardCollapse'

const Location_Sale_Card = ({ index, item, selectedDate }) => {
    const [States,setStates] = useState({
        data: [], loading: true
    })
    const { getLocationSaleData } = useHttp()
    
    useEffect(() => {
        const { PlaceId } = item;
        if (selectedDate === '') return;
        const _dateStatusConvertToDate = dateStatusConvertToDate(selectedDate)
        getLocationSaleData({ ..._dateStatusConvertToDate, locationid: PlaceId }, ({ LocationSalesData, TotalTodaySales, TotalYesterdaySales }, error) => {
            if (!error) {
                setStates({data: [...LocationSalesData], loading: false})
            }
        })
    }, [selectedDate])

    const LoaderView = useCallback(() => (
        <View style={[commonStyles.fillFullScreen]}><ActivityIndicator /></View>
    ), [])

    const LocationChildren = useCallback(({}) => {
        if (States.loading) return <LoaderView />
        return States.data.map((val, index) => <LocationSaleCardCollapse value={val} index={index} />)
    }, [States])
    return (
        <View key={index} style={commonStyles.fullWidth}>
            <View style={[commonStyles.shadow, styles.cardContainer]}>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <View style={[styles.cardIconContainer, commonStyles.center]}>
                        <Image source={homeIcons.LocationSale} style={styles.iconSize} />
                    </View>
                    <HorizontalSpace />
                    <View>
                        <Text style={[styles.cardCashTitle, FONTS.body4, commonStyles.textFamily500]}>{"Location: "}</Text>
                        <Text style={[styles.cardCashAmountTitle, FONTS.body2, commonStyles.textFamily700]}>{`${item?.PlaceName || '-'}`}</Text>
                    </View>
                </View>
            </View>
            <VerticalSpace />
            <LocationChildren />
        </View>
    )
}

export default memo(Location_Sale_Card)

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF', borderRadius: 10,
        padding: 0,
        paddingVertical: 15, paddingHorizontal: 15
    },
    cardIconContainer: {
        backgroundColor: '#C2DBFF', borderRadius: 10,
        height: genericRatio(45), width: genericRatio(45),
    },
    iconSize: {
        height: genericRatio(30), width: genericRatio(30)
    },
    cardCashTitle: {
        color: '#999',
    },
    cardCashAmountTitle: {
        color: '#004976'
    }
})