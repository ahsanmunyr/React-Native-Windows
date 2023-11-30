import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace';

const Tags = ({data = [], title = ''}) => {
  if (data.length === 0) return null;
  return (
    <View style={[commonStyles.fullWidth,]}>
      <Text style={[FONTS.body3]}>{title}</Text>
      <VerticalSpace />
      <View style={[commonStyles.rowDirectionCenter, {flexWrap: 'wrap'}]}>
        {data.map((val, index) => (<View key={index} style={styles.container}>
            <Text style={[FONTS.body4, {color: COLORS.primary}]}>{val}</Text>
            </View>))}
      </View>
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryHard, borderWidth: 0.5,
        marginHorizontal: 5, marginVertical: 5, borderRadius: 10,
        borderColor: COLORS.primary, paddingVertical: 5, paddingHorizontal: 10,
      }
})