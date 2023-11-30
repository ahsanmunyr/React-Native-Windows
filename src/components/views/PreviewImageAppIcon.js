import { StyleSheet, Text, Image, View } from 'react-native'
import React, { memo } from 'react'
import { AppIcon } from '../../constant/images'
import { genericRatio } from '../../helper/helper'
import { COLORS, commonStyles } from '../../constant/theme'
import { MaterialIcons } from '../../constant/icon'
import HorizontalSpace from './HorizontalSpace'

const PreviewImageAppIcon = ({imageSize, mediaPath}) => {
  // return <Image style={[styles.ImageSize, imageSize]}  source={mediaPath || AppIcon}/>
  return <View style={[commonStyles.rowDirectionCenter, 
    {backgroundColor: COLORS.primary, borderRadius: 10,
    paddingHorizontal: 5, paddingVertical: 2}]}>
    <MaterialIcons name='location-pin' size={30} color={COLORS.secondary} />
    <HorizontalSpace container={{width: 5}} />
<Text style={[{ 
    color: 'white', fontFamily: "TiltNeon", fontSize: 34
     }]}>{"REVAKI"}</Text>
</View>
}
PreviewImageAppIcon.defaultProps = {
    imageSize: {},
    mediaPath: ''
}

export default memo(PreviewImageAppIcon)

const styles = StyleSheet.create({
    ImageSize: {height: 100, width: 100}
})