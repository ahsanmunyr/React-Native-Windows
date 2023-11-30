import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme';
import { AntDesign, MaterialIcons } from '../../constant/icon';
import { genericRatio } from '../../helper/helper';
import LocationSaleCardCollapsePieChartCard from './LocationSaleCardCollapsePieChartCard';
import HorizontalSpace from './HorizontalSpace';
import CollapsibleView from './CollapsibleView';

const LocationSaleCardCollapse = ({ value, index }) => {
    const CollapsibleRef = useRef()

    const [IconName, SetIconName] = useState('down')
    
    const onClickOpenCollapse = useCallback(() => {
        CollapsibleRef.current.toggleListPreview(!CollapsibleRef.current.status())
        SetIconName(IconName === 'down' ? 'up' : 'down')
    }, [CollapsibleRef, IconName])

    return (
        <View key={index} style={[commonStyles.fullWidth,]}>
            <View style={[styles.cardContainer, commonStyles.shadow, commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween,]}>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <MaterialIcons name={'storefront'} color={COLORS.primary} size={20} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3, commonStyles.textFamily500, {color: '#000'}]}>{value.PlaceName}</Text>
                    </View>
                <TouchableOpacity activeOpacity={.9} onPress={onClickOpenCollapse}>
                    <AntDesign name={IconName} color={'#92929D'} size={genericRatio(15)} />
                </TouchableOpacity>
            </View>
            <CollapsibleView ref={CollapsibleRef}>
            <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, {}]}>
                <LocationSaleCardCollapsePieChartCard title={'Today'} valueFigure={value.TodaySales} />
                <LocationSaleCardCollapsePieChartCard title={'Yesterday'} valueFigure={value.YesterdaySales} />
               </View>
            </CollapsibleView>
            {/* <Collapsible collapsed={collapsible}>
               <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, {}]}>
                <LocationSaleCardCollapsePieChartCard title={'Today'} valueFigure={value.TodaySales} />
                <LocationSaleCardCollapsePieChartCard title={'Yesterday'} valueFigure={value.YesterdaySales} />
               </View>
            </Collapsible> */}
        </View>
    )
}

export default memo(LocationSaleCardCollapse)

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF', borderRadius: 10,
        padding: 0,
        paddingVertical: 15, paddingHorizontal: 15
    },
})