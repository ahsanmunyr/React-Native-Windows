import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { useSelector } from 'react-redux'

const uri = 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png'
const HomeHeader = () => {
    const user = useSelector(x => x.user)
    const greekStatus = useMemo(() => {
        let today = new Date()
        let curHr = today.getHours()
        let greekMessage = '';
        if (curHr < 12) {
            greekMessage = "Good Morning"
        } else if (curHr < 18) {
            greekMessage = "Good Afternoon"
        } else {
            greekMessage = "Good Evening"
        }
        return greekMessage
    }, [])
    return (
        <View style={[styles.container, commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
            <View>
                <Text style={[FONTS.body2, {color: '#FFF', fontFamily: 'Inter-Medium'}]}>{greekStatus},</Text>
                <Text style={[FONTS.h1, {color: '#FFF', fontFamily: 'Inter-Bold'}]}>{user?.PlaceName || ''}</Text>
            </View>
            <Image source={{uri}} style={styles.Image} />
        </View>
    )
}

export default memo(HomeHeader)

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20
    },
    Image: { height: genericRatio(65), width: genericRatio(65), borderRadius: genericRatio(65) }
})