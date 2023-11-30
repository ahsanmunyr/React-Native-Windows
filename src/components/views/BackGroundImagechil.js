import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { commonStyles } from '../../constant/theme'
import { nonAuthscreenbackgroundImg } from '../../constant/images'

const BackGroundImagechil = ({ children }) => {
    return (
        <ImageBackground
            source={nonAuthscreenbackgroundImg}
            style={[commonStyles.fillFullScreen]}>
            {children}
        </ImageBackground>
    )
}

export default memo(BackGroundImagechil)

const styles = StyleSheet.create({})