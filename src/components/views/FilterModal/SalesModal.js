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
import { allClear, save } from '../../../redux/reducers/saveFilter'
import { DateArray } from '../../../helper/helper'

const SalesModal = forwardRef(({getSubmittedFilteredData, clearData}, ref) => {
    const ListRef = useRef({})
    const dispatch = useDispatch()
    const posData = useSelector(x => x.posData)
    const id = 'Location_Sale_001_Sales'
    
    const filterCbVisibilityHide = useCallback(() => {
        ListRef.current['modalRef'].hide()
      }, [ListRef])

      const filterCbVisibility = useCallback(() => {
        ListRef.current['modalRef'].show()
      }, [ListRef])

      const filterSubmitCB = useCallback(() => {
        const selectedText = ListRef.current['selectDateRef'].selectedText
        const selectedStoreIndex = ListRef.current['locationRef'].selectedIndex
        
        if (!selectedText) return console.warn('Please select date')
        getSubmittedFilteredData(selectedText, selectedStoreIndex)
        // dispatch(save({key: id, selectedText}))
        ListRef.current['modalRef'].hide()
      }, [ListRef])

      useImperativeHandle(ref, () => {
          return {
            open: filterCbVisibility
          }
        },[])


      
  return (
    <ModalContainer ref={(ref) => ListRef.current['modalRef'] = ref}>
        <DropDownSelectionContainer title={'Select Date'} id={id}
          ref={(ref) => ListRef.current['selectDateRef'] = ref}
          noNeedToSave={true}
          openDownSheet={DateArray} />
        <VerticalSpace />
        <Locationised
          ref={(ref) => ListRef.current['locationRef'] = ref}
          title={"Location store"} data={posData['FranchiseList'] || []} />
        <VerticalSpace container={{ height: 20 }} />
        <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter]}>
          <BottomButtonModel title='Close' textStyle={{ color: COLORS.primary }}
            cb={filterCbVisibilityHide}
            container={styles.close} />
          <HorizontalSpace />
          <BottomButtonModel title='Submit' cb={filterSubmitCB}
            textStyle={{ color: COLORS.secondary }}
            container={styles.submitBtnContainer} />
        </View>
      </ModalContainer>
  )
})

export default memo(SalesModal)

const styles = StyleSheet.create({
  submitBtnContainer: { flex: 1, backgroundColor: COLORS.primary },
  clear: { flex: 1, backgroundColor: COLORS.lightGray6, borderWidth: 0.5, borderColor: COLORS.lightGray5 },
  close: { flex: 1, backgroundColor: COLORS.primaryHard, borderWidth: 0.5, borderColor: COLORS.primary }
})