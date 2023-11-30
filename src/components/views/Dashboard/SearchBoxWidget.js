import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../../constant/theme'
import { SearchNormal } from '../../../constant/icon'
import { genericRatio } from '../../../helper/helper'

const SearchBoxWidget = () => {
  return (
    <View style={[commonStyles.fullWidth, styles.container, commonStyles.rowDirectionCenter, commonStyles.shadow]}>
      <View style={styles.iconContainer}>
        <Image source={SearchNormal} style={styles.iconSize} />
      </View>
      <TextInput style={[commonStyles.fillFullScreen, styles.textInputContainer]} placeholder='Search ...' />
    </View>
  )
}

export default memo(SearchBoxWidget)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        // paddingHorizontal: 5,
        borderRadius: 10,
        padding: 5
    },
    iconContainer: {
        paddingHorizontal: 10
    },
    iconSize: {
        height: genericRatio(25), width: genericRatio(25)
    },
    textInputContainer: {
        height: 45, padding: 0,
        paddingHorizontal: 10,
    }
})