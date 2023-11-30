import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import { FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'
import ProgressCircle from 'react-native-progress-circle'
import HorizontalSpace from './HorizontalSpace'
import { genericRatio } from '../../helper/helper'

const LocationSaleCardCollapsePieChartCard = ({ title, valueFigure }) => {
    const colorPickup = useMemo(() => {
        const colors = { 'Today': '#FFC542', 'Yesterday': '#3847A5' }
        return colors[title] || 'yellow'
    }, [])
    return (
        <View style={[styles.containr, commonStyles.shadow]}>
            <View style={[commonStyles.center]}>
                <ProgressCircle
                    percent={75}
                    radius={50}
                    borderWidth={genericRatio(5)}
                    color={colorPickup}
                    shadowColor="#DBDBDB"
                    bgColor="#FFF">
                    <Text style={[FONTS.body2, commonStyles.textFamily700, styles.valueTitle]}>{valueFigure}</Text>
                    <Text style={[FONTS.body4, commonStyles.textFamily500, styles.keyTitle]}>{title}</Text>
                </ProgressCircle>
            </View>
            <VerticalSpace />
            <View style={[commonStyles.rowDirectionCenter,]}>
            <View>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <View style={[styles.colorLine, { backgroundColor: colorPickup }]} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body4, commonStyles.textFamily600, styles.keyTitle]}>{`${title} Sale:`}</Text>
                </View>
                <Text style={[FONTS.body2, commonStyles.textFamily700, styles.valueTitle, { textAlign: 'right' }]}>{valueFigure}</Text>
            </View>
            <View style={[commonStyles.fillFullScreen]} />
            </View>
            

        </View>
    )
}

export default memo(LocationSaleCardCollapsePieChartCard)

const styles = StyleSheet.create({
    containr: {
        margin: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        width: '48%'
    },
    valueTitle: {
        color: '#000',
    },
    keyTitle: {
        color: '#999',
    },
    colorLine: {
        height: genericRatio(10), width: genericRatio(2)
    }

})