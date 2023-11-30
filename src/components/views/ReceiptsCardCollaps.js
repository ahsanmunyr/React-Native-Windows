import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Children, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'
import { AntDesign, emptyWallet, homeIcons } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'
import HorizontalSpace from './HorizontalSpace'
import CollapsibleView from './CollapsibleView'

const ReceiptsCardCollaps = ({ index, item }) => {
    const CollapsibleRef = useRef()
    const [IconName, SetIconName] = useState('down')
    
    const GridContentView = useCallback(({ keyTitle, valueTitle, showText = true, showRightLinebool = false }) => (
        <View style={[commonStyles.fillFullScreen, commonStyles.center, showRightLinebool && styles.borderRightwidthStyle]}>
            <Text style={[FONTS.body3, commonStyles.textFamily500, styles.keyTitleStyle]}>{keyTitle}</Text>
            {showText ? <Text style={[FONTS.body2, commonStyles.textFamily700, styles.valueTitleStyle]}>{valueTitle}</Text> :
                <View style={[commonStyles.center, styles.valueContainer, valueTitle === 'Close' ? { backgroundColor: '#fcf0f0' } : { backgroundColor: '#f0fcf6' }]}>
                    <Text style={[FONTS.body3, commonStyles.textFamily400, styles.valueContainerTitle, valueTitle === 'Close' ? { color: '#f4a2a1' } : { color: '#9ae3c1' }]}>{valueTitle}</Text>
                </View>
            }
        </View>
    ), [])

    const onClickOpenCollapse = useCallback(() => {
        CollapsibleRef.current.toggleListPreview(!CollapsibleRef.current.status())
        SetIconName(IconName === 'down' ? 'up' : 'down')
    }, [CollapsibleRef, IconName])


    const collapsedArrayValue = useMemo(() => item?.Details || [], [])

    return (
        <View key={index} style={[commonStyles.shadow, styles.cardContainer, commonStyles.fullWidth]}>
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <View style={[styles.cardIconContainer, commonStyles.center]}>
                        <Image source={homeIcons.Receipts} style={styles.iconSize} />
                    </View>
                    <HorizontalSpace />
                    <View style={[commonStyles.rowDirectionCenter]}>
                        <Text style={[styles.cardCashTitle, FONTS.body3, commonStyles.textFamily500]}>{"Receipt No: "}</Text>
                        <Text style={[styles.cardCashAmountTitle, FONTS.body2, commonStyles.textFamily700]}>{`${item?.ReceiptNo || '-'}`}</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={.9} onPress={onClickOpenCollapse}>
                    <AntDesign name={IconName} color={'#92929D'} size={genericRatio(15)} />
                </TouchableOpacity>
            </View>
            <CollapsibleView ref={CollapsibleRef}>
                {collapsedArrayValue.map((val, index) => (
                    <View key={index} style={[commonStyles.center,
                    { paddingHorizontal: 20, backgroundColor: '#e7e8e7', marginTop: 10 }]}>

                        <View style={[commonStyles.fullWidth, commonStyles.rowDirection]}>
                            <View style={[commonStyles.rowDirectionCenter, commonStyles.fillFullScreen,

                            { paddingVertical: 5, }]}>
                                <Text style={[FONTS.body3]}>{"Product:"}</Text>
                                <HorizontalSpace />
                                <Text style={[FONTS.body4]}>{val?.Product || ''}</Text>
                            </View>
                        </View>
                        <View style={[commonStyles.fullWidth, commonStyles.rowDirection, commonStyles.center, { borderWidth: 2, borderColor: COLORS.lightGray5, }]}>
                            <View style={[commonStyles.fillFullScreen,
                            { paddingVertical: 5, }, commonStyles.center]}>
                                <Text style={[FONTS.body3]}>{"Quantity"}</Text>
                                <HorizontalSpace />
                                <Text style={[FONTS.body4]}>{val?.Qty || ''} QTY</Text>
                            </View>
                            <View style={styles.collapesSectionOne} />
                            <View style={[commonStyles.fillFullScreen,
                            { paddingVertical: 5, }, commonStyles.center]}>
                                <Text style={[FONTS.body3]}>{"Price"}</Text>
                                <HorizontalSpace />
                                <Text style={[FONTS.body4]}>{val?.Price || ''} PKR</Text>
                            </View>
                            <View style={styles.collapesSectionOne} />
                            <View style={[commonStyles.fillFullScreen,
                            { paddingVertical: 5, }, commonStyles.center]}>
                                <Text style={[FONTS.body3]}>{"Total"}</Text>
                                <HorizontalSpace />
                                <Text style={[FONTS.body4]}>{val?.Total || ''} PKR</Text>
                            </View>
                        </View>
                        <VerticalSpace />
                    </View>
                ))}
            </CollapsibleView>

            <VerticalSpace />
            <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, commonStyles.spaceBetween, { flexWrap: 'wrap' }]}>
                <GridContentView keyTitle={'Amount:'} valueTitle={item?.Amount || '716'} showRightLinebool />
                <GridContentView keyTitle={'Status:'} valueTitle={item?.Status || 'Close'} showText={false} showRightLinebool />
                <GridContentView keyTitle={'Profit:'} valueTitle={item?.Profit || '0'} showRightLinebool />
                <GridContentView keyTitle={'Table No:'} valueTitle={item?.TableNo || '5521'} />

            </View>
        </View>
    )
}

export default memo(ReceiptsCardCollaps)

const styles = StyleSheet.create({
    container: { paddingHorizontal: 10, marginTop: 10 },
    item: { borderRadius: 10, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: COLORS.secondary },
    containerTop: { backgroundColor: COLORS.primary, paddingVertical: 5, borderTopRightRadius: 20, borderTopLeftRadius: 20, },
    gridOne: { justifyContent: 'center', borderWidth: 2, borderColor: COLORS.lightGray5, },
    collapesSectionOne: { height: '100%', width: 2, backgroundColor: COLORS.lightGray5, },
    bottomSectiton: { justifyContent: 'center', borderWidth: 2, borderColor: COLORS.lightGray5, },
    itemContainer: {
        flex: 1,
    },

    cardContainer: {
        backgroundColor: '#FFF', borderRadius: 10,
        padding: 0,
        paddingVertical: 15, paddingHorizontal: 15
    },
    cardIconContainer: {
        backgroundColor: '#CCEFFF', borderRadius: 10,
        height: genericRatio(45), width: genericRatio(45),
    },
    iconSize: {
        height: genericRatio(30), width: genericRatio(30)
    },
    keyTitleStyle: {
        color: '#999'
    },
    valueTitleStyle: {
        color: '#000'
    },
    valueContainerTitle: {
        color: '#FC5A5A',
    },
    valueContainer: {
        paddingVertical: 1, paddingHorizontal: 10, borderRadius: 5, marginTop: 1
    },
    borderRightwidthStyle: { borderColor: '#999', borderRightWidth: 0.5 },
})


{/* <View key={index} style={[commonStyles.fullWidth, styles.container]} >
            <View style={[commonStyles.fullWidth, commonStyles.shadow, styles.item]}>
                <View style={[commonStyles.rowDirectionCenter, commonStyles.center, styles.containerTop]}>
                    <Text style={[FONTS.h4, { color: 'white' }]}>{"ReceiptNo#" + " " + item?.ReceiptNo || ''}</Text>
                </View>

                <VerticalSpace />
                <View style={[commonStyles.fullWidth, , { paddingHorizontal: 10, }]}>
                    <View style={[commonStyles.rowDirectionCenter, styles.gridOne]}>

                        <View style={[styles.itemContainer, { alignItems: 'center', }]}>
                            <Text style={[FONTS.body3]}>{"Amount"}</Text>
                            <Text style={[FONTS.body4]}>{item?.Amount || ''} PKR</Text>
                        </View>
                        <View style={{ height: '100%', width: 2, backgroundColor: COLORS.lightGray5, }} />
                        <View style={[styles.itemContainer, { alignItems: 'center', }]}>
                            <Text style={[FONTS.body3]}>{"Status"}</Text>
                            <Text style={[FONTS.body4]}>{item?.Status || ''}</Text>
                        </View>

                    </View>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.fullWidth, { paddingHorizontal: 10, paddingVertical: 10 }]}>
                    <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                        <Text style={[FONTS.body2]}>{"Details"}</Text>
                        <TouchableOpacity activeOpacity={.9} onPress={() => toggleListPreview(!collapsible)}>
                            <AntDesign name={statusShowList} size={genericRatio(20)} color={COLORS.primary} />
                        </TouchableOpacity>
                    </View>
                    <Collapsible collapsed={collapsible}>
                        {item?.Details.map((val, index) => (
                            <>
                                <View key={index} style={[commonStyles.center,
                                { paddingHorizontal: 20, backgroundColor: '#e7e8e7' }]}>

                                    <View style={[commonStyles.fullWidth, commonStyles.rowDirection]}>
                                        <View style={[commonStyles.rowDirectionCenter, commonStyles.fillFullScreen,

                                        { paddingVertical: 5, }]}>
                                            <Text style={[FONTS.body3]}>{"Product:"}</Text>
                                            <HorizontalSpace />
                                            <Text style={[FONTS.body4]}>{val?.Product || ''}</Text>
                                        </View>
                                    </View>
                                    <View style={[commonStyles.fullWidth, commonStyles.rowDirection, commonStyles.center, { borderWidth: 2, borderColor: COLORS.lightGray5, }]}>
                                        <View style={[commonStyles.fillFullScreen,
                                        { paddingVertical: 5, }, commonStyles.center]}>
                                            <Text style={[FONTS.body3]}>{"Quantity"}</Text>
                                            <HorizontalSpace />
                                            <Text style={[FONTS.body4]}>{val?.Qty || ''} QTY</Text>
                                        </View>
                                        <View style={styles.collapesSectionOne} />
                                        <View style={[commonStyles.fillFullScreen,
                                        { paddingVertical: 5, }, commonStyles.center]}>
                                            <Text style={[FONTS.body3]}>{"Price"}</Text>
                                            <HorizontalSpace />
                                            <Text style={[FONTS.body4]}>{val?.Price || ''} PKR</Text>
                                        </View>
                                        <View style={styles.collapesSectionOne} />
                                        <View style={[commonStyles.fillFullScreen,
                                        { paddingVertical: 5, }, commonStyles.center]}>
                                            <Text style={[FONTS.body3]}>{"Total"}</Text>
                                            <HorizontalSpace />
                                            <Text style={[FONTS.body4]}>{val?.Total || ''} PKR</Text>
                                        </View>
                                    </View>
                                    <VerticalSpace />
                                </View>
                                <VerticalSpace />
                            </>
                        ))}

                    </Collapsible>


                </View>
                <View style={[commonStyles.fullWidth, , { paddingHorizontal: 10, }]}>
                    <View style={[commonStyles.rowDirectionCenter, styles.bottomSectiton]}>

                        <View style={[styles.itemContainer, { alignItems: 'center', }]}>
                            <Text style={[FONTS.body3]}>{"Profit"}</Text>
                            <Text style={[FONTS.body4]}>{item?.Profit || '' + " " + "PKR"}</Text>
                        </View>
                        <View style={styles.collapesSectionOne} />
                        <View style={[styles.itemContainer, { alignItems: 'center', }]}>
                            <Text style={[FONTS.body3]}>{"Table No"}</Text>
                            <Text style={[FONTS.body4]}>{item?.TableNo || ''}</Text>
                        </View>

                    </View>
                </View>
                <VerticalSpace />

            </View>
        </View> */}