import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, memo, useCallback, useImperativeHandle, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'

const ModalContainer = forwardRef(({children, allowCloseBackDropBool = true, headerTitle = 'Filters'}, ref) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const show = useCallback(() => {
        setModalVisibility(true)
    }, [])
    const hide = useCallback(() => {
        setModalVisibility(false)
    }, [])
    useImperativeHandle(ref, () => {
        return {
            show, hide
        }
    }, [])
    
  return (
    <Modal animationType={"fade"}
            transparent
            visible={modalVisibility}>
            <Pressable style={[commonStyles.fillFullScreen,
            { backgroundColor: COLORS.backdrop, justifyContent: 'flex-end', alignItems: 'center' }]}
            onPress={(event) => event.target == event.currentTarget && allowCloseBackDropBool && hide()}
            >
                <View style={[styles.mainContainer, commonStyles.center]}>
                    <Text style={[FONTS.h2, commonStyles.textFamily700, styles.colorText]}>{headerTitle}</Text>
                    <VerticalSpace />
                    {children}
                </View>
            </Pressable>
        </Modal>
    )
})

export default memo(ModalContainer)

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingHorizontal: 20, borderRadius: 10,
        paddingVertical: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: COLORS.secondary,
    },
    colorText: {
        color: '#000'
    }
})