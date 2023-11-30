import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, commonStyles } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'

const BodyScreenlayout = ({ children, containerStyle, BodyScrollContainerStyle }) => {
  return (
    <View style={[commonStyles.fillFullScreen, styles.container, containerStyle]}>
      
      <ScrollView style={[commonStyles.fillFullScreen, BodyScrollContainerStyle]} 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[{ }]}>
      {children}
      </ScrollView>
    </View>
  )
}

BodyScreenlayout.defaultProps = {
  children: [], containerStyle: {}, BodyScrollContainerStyle: {}
}

export default memo(BodyScreenlayout)

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: genericRatio(30),
    borderTopLeftRadius: genericRatio(30),
    backgroundColor: COLORS.secondary,
  }
})

{/* <View style={[commonStyles.fillFullScreen, styles.container, containerStyle]}>
      {children}
      <ScrollView style={} contentContainerStyle={}>
        
      </ScrollView>
    </View> */}


    // <ScrollView style={[commonStyles.fillFullScreen, styles.container, containerStyle]} contentContainerStyle={[]}>
    //   {children}
    // </ScrollView>

    // <View style={[commonStyles.fillFullScreen, styles.container, containerStyle]}>
      
    //   <ScrollView style={[{marginTop: -20}]} contentContainerStyle={[{ }]}>
    //   {children}
    //   </ScrollView>
    // </View>