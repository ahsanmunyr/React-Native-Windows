import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import HorizontalSpace from '../HorizontalSpace'
import VerticalSpace from '../VerticalSpace'

import DoughtnutSection from './DoughtnutSection'
import { DateArray } from '../../../helper/helper'


const PiechartSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [States, SetStates] = useState({
        selectedIndex: 0,
    })

    const onSelectd = useCallback((index) => SetStates(prev => ({...prev, "selectedIndex": index})), [States]);
    const _SelectedIndex = useMemo(() => States.selectedIndex, [States.selectedIndex])
    const _PeriodTimeTitle = useMemo(() => DateArray[_SelectedIndex], [_SelectedIndex])
    const TabContainer = useCallback(() => (
        <View style={[commonStyles.rowDirectionCenter, commonStyles.fullWidth, commonStyles.center]}>
            {DateArray.map((val, index) => <TouchableOpacity activeOpacity={0.9} key={index}
                style={[styles.tagContainer, commonStyles.center, _SelectedIndex === index && styles.tagSelected]} onPress={() => onSelectd(index)}>
                <Text style={[FONTS.body3, styles.textStyle, _SelectedIndex === index && styles.tagSelectedText]}>{val}</Text>
            </TouchableOpacity> 
            )}
        </View>
    ), [_SelectedIndex])
    return (
        <View style={[commonStyles.shadow, styles.container, commonStyles.center]}>
            <TabContainer />
            <Text style={[FONTS.body2, styles.SelectedHEaderText]}>{_PeriodTimeTitle + " Sales"}</Text>
            <VerticalSpace />
            <DoughtnutSection mode={_PeriodTimeTitle} />
        </View>
    )
}

export default memo(PiechartSection)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 10,
        borderRadius: 10
    },
    tagContainer: {
        paddingHorizontal: 15, paddingVertical: 5,
        backgroundColor: '#F2F4F5',
        borderRadius: 10, margin: 5
    },
    tagSelected: {
        borderWidth: 0.5, borderColor: COLORS.primary
    },
    tagSelectedText: {
        color: COLORS.primary
    },
    textStyle: { color: '#9CA3AF', fontFamily: 'Inter-SemiBold' },
    SelectedHEaderText: {
        fontFamily: 'Inter-SemiBold', color: '#000',
    }
})