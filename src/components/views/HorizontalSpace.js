import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const HorizontalSpace = ({container={}}) => {
  return (
    <View style={[styles.container, container]} />
  )
}

export default memo(HorizontalSpace)

const styles = StyleSheet.create({
    container: {
        width: 10
    }
})