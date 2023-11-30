import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'

const HeaderScreenlayout = ({ children, containerStyle }) => {
    return (
        <View style={[commonStyles.fullWidth, styles.container, containerStyle]}>
            {children}
        </View>
    )
}

HeaderScreenlayout.defaultProps = {
    children: [], containerStyle: {}
  }

export default memo(HeaderScreenlayout)

const styles = StyleSheet.create({
    container: {
        height: genericRatio(200),
        padding: 10,
    }
})