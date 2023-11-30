import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, memo, useRef, useCallback, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateArray } from '../../../helper/helper'
import DropDownSelectionContainer from '../filterComponents/DropDownSelectionContainer'
import VerticalSpace from '../VerticalSpace'
import BottomButtonModel from '../BottomButtonModel'
import ModalContainer from '../ModalContainer'
import { COLORS, commonStyles } from '../../../constant/theme'
import HorizontalSpace from '../HorizontalSpace'

const LocationSaleModal = forwardRef(({getSelectedDate = () => {}}, ref) => {
    const ListRef = useRef({})

    const LOCATIONSALE001 = "Location_Sale_002_LocationSale"

   const filterCbVisibilityHide = useCallback(() => {
        ListRef.current['modalRef'].hide()
      }, [ListRef])

      const filterCbVisibility = useCallback(() => {
        ListRef.current['modalRef'].show()
      }, [ListRef])

      const filterSubmitCB = useCallback(() => {
        const selectedText = ListRef.current['selectDateRef'].selectedText

        if (!selectedText) return console.warn('Please select date')
        getSelectedDate(selectedText)

        ListRef.current['modalRef'].hide()
      }, [ListRef])


      useImperativeHandle(ref, () => {
          return {
            open: filterCbVisibility
          }
        },[])
      
  return (
    <ModalContainer ref={(ref) => ListRef.current['modalRef'] = ref}>
        <DropDownSelectionContainer title={'Select Date'} id={LOCATIONSALE001}
          ref={(ref) => ListRef.current['selectDateRef'] = ref}
          noNeedToSave
          openDownSheet={DateArray} />
        
        <VerticalSpace container={{ height: 20 }} />
        <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter]}>
          <BottomButtonModel title='Close' textStyle={{ color: COLORS.primary }}
            cb={filterCbVisibilityHide}
            container={{ flex: 1, backgroundColor: COLORS.primaryHard, borderWidth: 0.5, borderColor: COLORS.primary }} />
          <HorizontalSpace />
          <BottomButtonModel title='Submit'
          cb={filterSubmitCB}
            textStyle={{ color: COLORS.secondary }}
            container={{ flex: 1, backgroundColor: COLORS.primary }} />
        </View>
      </ModalContainer>
  )
})

export default memo(LocationSaleModal)

const styles = StyleSheet.create({})