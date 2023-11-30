import { StyleSheet, Image, View } from 'react-native'
import React, { memo } from 'react'
import { commonStyles } from '../../../constant/theme'
import { ImageListEmpty } from '../../../constant/images'
import { genericRatio } from '../../../helper/helper'

const OnEmptyListing = () => {
    return (
        <View style={[commonStyles.fillFullScreen, commonStyles.center, styles.EmptyContainer]}>
            <Image source={ImageListEmpty} style={styles.imageSize} />
        </View>
    )
}

export default memo(OnEmptyListing)

const styles = StyleSheet.create({
    EmptyContainer: {
        paddingVertical: 20, marginTop: 20
    },
    imageSize: { height: genericRatio(200), width: genericRatio(300) }
})