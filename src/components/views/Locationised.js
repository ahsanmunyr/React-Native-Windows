import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { AntDesign, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '../../constant/icon'
import { genericRatio, showToastMsg } from '../../helper/helper'
import VerticalSpace from './VerticalSpace'
import RBSheet from "react-native-raw-bottom-sheet";
import HorizontalSpace from './HorizontalSpace'


const Locationised = forwardRef(({ data = [], title = '', }, ref) => {
  const [selected, setSelectedItem] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  
  const refRBSheet = useRef();


  useEffect(() => {
    if (data.length === 1) {
      setSelectedItem(data[0])
      setSelectedIndex(0)
    }
  }, [data])
  useImperativeHandle(ref, () => {
    return {
      selected, selectedIndex
    }
  }, [selected, selectedIndex])
  const selectedshowSelectedITemText = useMemo(() => {
    let text = selected?.PlaceName || "Please Select Location"
    return text
  }, [selected])
  const openSheet = useCallback(() => {
    if (data.length > 1) {
      refRBSheet.current.open()
      return
    }
    showToastMsg('info', 'You have only one location')
  }, [refRBSheet, data])
  const onSelectedItem = useCallback((item, index) => {
    setSelectedItem(item)
    setSelectedIndex(index)
    refRBSheet.current.close()
  }, [])


  const ShowStores = useCallback(() => (
    <>
      <Text style={[FONTS.h2]}>{"List of Stores"}</Text>
      <VerticalSpace />
      {data.map((val, index) => (
        <TouchableOpacity style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, styles.addressItem]} key={index} onPress={() => onSelectedItem(val, index)}>
          <MaterialIcons name={'share-location'} size={genericRatio(25)} color={COLORS.primary} />
          <View style={[commonStyles.fillFullScreen, commonStyles.rowDirectionCenter, commonStyles.spaceBetween,
          { marginLeft: 10 }]}>
            <Text style={[FONTS.body3, { color: COLORS.primary }]}>{val.PlaceName}</Text>
            {selected !== null && selected['PlaceId'] === val['PlaceId'] &&
              <View style={[commonStyles.center, styles.itemSelectedTAG]}>
                <Text style={[FONTS.body5, { color: 'white' }]}>{"Selected"}</Text>
              </View>
            }
          </View>
        </TouchableOpacity>
      ))}
    </>
  ), [data])


  if (data.length === 0) return null
  return (
    <View style={[commonStyles.fullWidth,]}>
      <Text style={[FONTS.h4]}>{title}</Text>
      <VerticalSpace />
      <TouchableOpacity style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter, styles.container]}
        onPress={openSheet}
      >
        <Text style={[FONTS.body3, { color: COLORS.primary, flex: 1 }]}>{selectedshowSelectedITemText}</Text>
        <AntDesign name={'caretdown'} size={genericRatio(10)} color={COLORS.primary} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        height={genericRatio(200)}
        openDuration={250}
      >
        <ScrollView style={[commonStyles.fillFullScreen]} 
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}>
          <VerticalSpace />
          <ShowStores />
          <VerticalSpace />
        </ScrollView>
      </RBSheet>
    </View>
  )
})

export default memo(Locationised)

const styles = StyleSheet.create({
  container: {
    paddingVertical: genericRatio(10), paddingHorizontal: 10, backgroundColor: COLORS.primaryHard,
    borderWidth: genericRatio(0.5), borderColor: COLORS.primary, borderRadius: genericRatio(15)

  },
  addressItem: {
    paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryHard, marginVertical: 5
  },
  itemSelectedTAG: {
    paddingVertical: 5, paddingHorizontal: 8, backgroundColor: COLORS.primary, borderRadius: 10
  }
})