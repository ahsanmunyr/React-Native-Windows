import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { COLORS } from '../../constant/theme'

const Separator = () => {
  return (
    <View style={styles.line} />
  )
}

export default memo(Separator)

const styles = StyleSheet.create({
    line:{
        width:'100%',
        height: 2,
        backgroundColor: COLORS.Line
    }
})