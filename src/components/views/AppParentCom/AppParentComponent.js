import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, commonStyles } from '../../../constant/theme'
import HeaderScreenlayout from './HeaderScreenlayout'
import BodyScreenlayout from './BodyScreenlayout'

const AppParentComponent = ({ BodyScrollContainerStyle, HeaderComponent, BodyComponent, BackGroundImage, HeaderContainerStyle, BodyContainerStyle }) => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, {}]}>

      <ImageBackground
        style={[commonStyles.fillFullScreen]}
        source={{ uri: BackGroundImage }}>
        <HeaderScreenlayout containerStyle={HeaderContainerStyle}>
          {HeaderComponent}
        </HeaderScreenlayout>
        <BodyScreenlayout containerStyle={BodyContainerStyle} BodyScrollContainerStyle={BodyScrollContainerStyle}>
          {BodyComponent}
        </BodyScreenlayout>
      </ImageBackground>
    </SafeAreaView>
  )
}
AppParentComponent.defaultProps = {
  HeaderComponent: [], BodyComponent: [], 
  BackGroundImage: 'https://i.pinimg.com/originals/fe/e5/ea/fee5eab30a698c169dc4fd5752359c2c.jpg',
  HeaderContainerStyle: {}, BodyContainerStyle: {}
}

export default memo(AppParentComponent)

const styles = StyleSheet.create({})