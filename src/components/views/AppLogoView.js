import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { genericHeight, genericRatio } from '../../helper/helper'
import { commonStyles } from '../../constant/theme'
import { Revaki_logo } from '../../constant/images'
import HorizontalSpace from './HorizontalSpace'

const AppLogoView = () => {
  return (
    <View style={[commonStyles.fullWidth, commonStyles.center, styles.container, commonStyles.rowDirectionCenter]}>
      <Image style={styles.logo} source={Revaki_logo} /> 
      <HorizontalSpace container={{width: 40}}/>
    </View>
  )
}

export default memo(AppLogoView)

const styles = StyleSheet.create({
  container: { height: genericRatio(70),},
  logo: {
    height: '100%', width: genericRatio(200)
  }
})