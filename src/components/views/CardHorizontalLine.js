import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { commonStyles } from '../../constant/theme'

const CardHorizontalLine = () => {
  return <View style={[commonStyles.fullWidth, styles.line]} />
}

export default memo(CardHorizontalLine)

const styles = StyleSheet.create({
    line: {
        height: 0.5, backgroundColor: 'rgba(0, 0, 0, 0.10)'
      }
})