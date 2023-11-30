import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { memo, useState, useRef, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { AntDesign } from '../../../constant/icon'
import { genericRatio } from '../../../helper/helper'
import VerticalSpace from '../VerticalSpace'
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from 'react-redux'
import { save, remove } from '../../../redux/reducers/saveFilter'

const DropDownSelectionContainer = forwardRef(({ title, openDownSheet = [], id, noNeedToSave = false }, ref) => {
  const dispatch = useDispatch()
  const filter = useSelector(x => x.saveFilter)
  const [selectedText, setSelectedText] = useState('')
  const refRBSheet = useRef();

  useEffect(() => {
    const checkValueAvalibility = filter[id] || ''
    console.log(filter, { id })
    setSelectedText(checkValueAvalibility)
  }, [filter])

  const openSheet = useCallback(() => {
    refRBSheet.current.open()
  }, [refRBSheet,])

  const onSelectedItem = useCallback((item) => {
    if (!noNeedToSave) dispatch(save({ key: id, item }))
    setSelectedText(item)
    refRBSheet.current.close()
  }, [])

  const clear = useCallback(() => {
    setSelectedText('')
    dispatch(remove({ key: id }))
  }, [])

  useImperativeHandle(ref, () => {
    return {
      clear, selectedText,
    }
  }, [selectedText])

  return (
    <>
      <View style={[commonStyles.fullWidth]}>
        <TouchableOpacity onPress={openSheet}
          style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter,
          commonStyles.spaceBetween, styles.mainContainer, commonStyles.shadow]}>
          <Text style={[FONTS.body3]}>{selectedText || "Please Select"}</Text>
          <AntDesign name={'down'} size={genericRatio(15)} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={genericRatio(200)}
        openDuration={250}
      >
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={[commonStyles.fillFullScreen]} contentContainerStyle={{ paddingHorizontal: 10 }}>
          <VerticalSpace />
          {openDownSheet.map((val, index) => (
            <TouchableOpacity key={index} style={[styles.dropDownItem, commonStyles.rowDirection, commonStyles.fullWidth]}
              onPress={() => onSelectedItem(val)}>
              <Text style={[FONTS.body3]}>{val}</Text>
            </TouchableOpacity>
          ))}
          <VerticalSpace />
        </ScrollView>
      </RBSheet>
    </>
  )
})

DropDownSelectionContainer.defaultProps = {
  title: '', openDownSheet: [],
}

export default memo(DropDownSelectionContainer)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F9FAFB', borderWidth: 0.5, 
    borderColor: '#D1D5DB', borderRadius: 10,
    paddingHorizontal: 15, paddingVertical: 10
  },
  dropDownItem: {
    paddingVertical: 10, paddingHorizontal: 15, borderBottomWidth: 0.5
  }
})