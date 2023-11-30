import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { FONTS, commonStyles } from '../../constant/theme'
import HorizontalSpace from './HorizontalSpace'
import { AntDesign } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'

const FilterItemContainer = ({ keyTitle, value, cb }) => {
    return (
        <TouchableOpacity style={[commonStyles.rowDirectionCenter, styles.tag]} onPress={cb}>
            <Text style={[FONTS.body3, styles.TextColorWhite, commonStyles.textFamily600]}>{keyTitle}</Text>
            <Text style={[FONTS.body4, styles.TextColorWhite, commonStyles.textFamily600]}>{value}</Text>
            <HorizontalSpace />
            <AntDesign name={"close"} color={'#1C2A3A'} size={genericRatio(12)} />
        </TouchableOpacity>
    )
}
FilterItemContainer.defaultProps = {
    keyTitle: '', value: '', cb: () => { }
}

export default memo(FilterItemContainer)

const styles = StyleSheet.create({
    tag: {
        borderColor: '#1C2A3A',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 100,
        borderWidth: 0.5,
        margin: 2,
    },
    TextColorWhite: { color: '#1C2A3A', },
})