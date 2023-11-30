import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo, useCallback } from 'react'
import { Entypo } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'
import { COLORS, commonStyles } from '../../constant/theme'
import { useNavigation } from '@react-navigation/native';

const DrawableBtn = () => {
    const navigation = useNavigation();
    const DrawableToggleCB = useCallback(() => navigation.toggleDrawer(),[navigation])
    return (
        <TouchableOpacity style={[styles.menuContainer, commonStyles.center]} onPress={DrawableToggleCB}>
            <Entypo name={"menu"} size={genericRatio(25)} color={COLORS.secondary} />
        </TouchableOpacity>
    )
}

export default memo(DrawableBtn)

const styles = StyleSheet.create({
    menuContainer: { backgroundColor: COLORS.primary, height: genericRatio(40), width: genericRatio(40), borderRadius: genericRatio(40) },
})