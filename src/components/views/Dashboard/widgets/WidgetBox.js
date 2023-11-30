import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../../constant/theme'
import { homeWidgetRevenueImage } from '../../../../constant/images'
import { genericRatio } from '../../../../helper/helper'
import { useSelector } from 'react-redux'

const WidgetBox = ({title, icon, cb, }) => {
    return (
        <TouchableOpacity activeOpacity={.9} style={[commonStyles.shadow, styles.widgetBox]} onPress={cb}>
            <View style={[commonStyles.fullWidth, {alignItems: 'flex-end',}]}>
                <View style={[commonStyles.center, styles.IConContainr, 
                    {backgroundColor: COLORS[title] || 'white' }]}
                    >
                    <Image source={icon} style={styles.iconStyle} />
                </View>
            </View>
            <View style={[commonStyles.fullWidth, {}]}>
                <Text style={[FONTS.body3, styles.titlestyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
WidgetBox.defaultProps = {
    title: "Revenue", icon: <View />, cb: () => {},
    color: '#FFE3E3'
}


export default WidgetBox

const styles = StyleSheet.create({
    widgetBox: {
        borderRadius: 10, paddingVertical: 10, 
        width: genericRatio(156), height: genericRatio(90),
        backgroundColor: COLORS.secondary, paddingHorizontal: 8,
        margin: 10, justifyContent: 'space-between',
        marginBottom: 0, marginRight: 0
    },
    IConContainr: {height: genericRatio(40), width: genericRatio(40), borderRadius: 10},
    iconStyle: {height: genericRatio(30), width: genericRatio(30)},
    titlestyle: {
        color: '#000',
        fontFamily: 'Inter-SemiBold'
    }
})