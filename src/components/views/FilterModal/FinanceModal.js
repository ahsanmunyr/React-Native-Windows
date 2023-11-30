import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, memo, useCallback, useImperativeHandle, useRef } from 'react'
import ModalContainer from '../ModalContainer'
import Locationised from '../Locationised'
import VerticalSpace from '../VerticalSpace'
import DropDownSelectionContainer from '../filterComponents/DropDownSelectionContainer'
import BottomButtonModel from '../BottomButtonModel'
import { COLORS, commonStyles } from '../../../constant/theme'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalSpace from '../HorizontalSpace'
import { allClear, saveFilterObj } from '../../../redux/reducers/saveFilter'
import { DateArray } from '../../../helper/helper'

const FinanceModal = forwardRef(({getSubmittedFilteredData}, ref) => {
    const ListRef = useRef({})
    const dispatch = useDispatch()
    const posData = useSelector(x => x.posData)
    const LOCATIONSALE001 = "Location_Sale_001_FinanceFilter"
    const CATEGORYFINANCE001 = "Category_Finance_001_FinanceFilter"

   const filterCbVisibilityHide = useCallback(() => {
        ListRef.current['modalRef'].hide()
      }, [ListRef])

      const filterCbVisibility = useCallback(() => {
        ListRef.current['modalRef'].show()
      }, [ListRef])

      const filterSubmitCB = useCallback(() => {
        const selectedText = ListRef.current['selectDateRef'].selectedText
        const selectedTextCategory = ListRef.current['selectCategoryRef'].selectedText
        const selectedStoreIndex = ListRef.current['locationRef'].selectedIndex
        
        if (!selectedText) return console.warn('Please select date')
        if (!selectedTextCategory) return console.warn('Please select date')
        getSubmittedFilteredData({store: {}, selectedDateStatus: selectedText, selectedCategory: selectedTextCategory}, selectedStoreIndex)
        let filter = {}
        filter[LOCATIONSALE001] = selectedText
        filter[CATEGORYFINANCE001] = selectedTextCategory
        // dispatch(saveFilterObj({...filter}))
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
          openDownSheet={DateArray} />
        <VerticalSpace />
        <DropDownSelectionContainer title={'Select Category'} id={CATEGORYFINANCE001}
          ref={(ref) => ListRef.current['selectCategoryRef'] = ref}
          openDownSheet={['Transactions', 'Accounts']} />
        <VerticalSpace />
        <Locationised
          ref={(ref) => ListRef.current['locationRef'] = ref}
          title={"Location store"} data={posData['FranchiseList'] || []} />
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

export default memo(FinanceModal)

const styles = StyleSheet.create({})