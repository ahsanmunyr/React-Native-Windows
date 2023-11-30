import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { FONTS, commonStyles } from '../../constant/theme'

const BottomButtonModel = ({ title = '', cb = () => { }, container = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity style={[commonStyles.fullWidth, commonStyles.center, styles.BottomButtonModelContainer, container]}
    onPress={cb}>
    <Text style={[FONTS.body3, textStyle]}>{title}</Text>
  </TouchableOpacity>
  )
}

export default memo(BottomButtonModel)

const styles = StyleSheet.create({
    BottomButtonModelContainer: {
        paddingVertical: 10, paddingHorizontal: 5,
        borderRadius: 10
      }
})
