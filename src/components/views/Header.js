import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import DrawableBtn from './DrawableBtn'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper/helper'
import HorizontalSpace from './HorizontalSpace'
import { AntDesign, Ionicons, settingIcon } from '../../constant/icon'
import VerticalSpace from './VerticalSpace'
import { useNavigation } from '@react-navigation/native'

const Header = ({ barTitle = '', cbFilterVisible }) => {
    const navigation = useNavigation();
    const DrawableToggleCB = useCallback(() => navigation.goBack(), [navigation])
    return (
        <View style={[commonStyles.fullWidth, styles.container,]}>
            <TouchableOpacity onPress={DrawableToggleCB}>
                <AntDesign name={'arrowleft'} color={'#000000'} size={genericRatio(30)} />
            </TouchableOpacity>
            <VerticalSpace />
            <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <Text style={[FONTS.h2, styles.barTitle, commonStyles.textFamily700]}>{barTitle}</Text>
                {cbFilterVisible !== undefined && <TouchableOpacity onPress={cbFilterVisible}>
                    <Image source={settingIcon} style={styles.ImageSize} />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    barTitle: { color: '#000', },
    container: {
        // backgroundColor: COLORS.primary,
    },
    filterContainer: {
        marginRight: 10
    },
    ImageSize: {
        height: genericRatio(25), width: genericRatio(25)
    }
})