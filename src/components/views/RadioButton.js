import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'


const RadioCustom = forwardRef(({containerStyle={}, onChange = function() {}, value = false, ONCB, OFFCB}, ref) => {
    const [toggle, setToggle] = useState(value)
    const toggleHandler = useCallback(() => {
        if (!toggle) {
            ONCB()
        } else {
            OFFCB()
        }
    }, [toggle])
    const textToggle = useMemo(() => {
        return toggle ? 'On' : 'Off'
    }, [toggle])
    useImperativeHandle(ref, () => {
        return {
        off: () => setToggle(false),
        on: () => setToggle(true),
        };
      }, []);
  return (
    <View style={[commonStyles.center, styles.RadioContainer,containerStyle, toggle && styles.successBorderColor]}>
        <TouchableOpacity 
        onPress={toggleHandler}
        style={[commonStyles.rowDirectionCenter, toggle && styles.reverseRow]}>
            <View style={[styles.circleShape, toggle && styles.successbackgroundColor]}/>
            <View style={{width: 5}} />
            <Text style={[styles.toggleText, toggle && styles.successTextColor]}>{textToggle}</Text>
        </TouchableOpacity>
    </View>
  )
})

export default memo(RadioCustom)

const styles = StyleSheet.create({
    RadioContainer: {
        borderWidth: 0.5,
        paddingHorizontal: 8,
        height: 28,
        borderRadius: 18,
    },
    reverseRow: {
        flexDirection: 'row-reverse'
    },
    circleShape: {
        backgroundColor: COLORS.darkgray,
        height:19,width: 19, borderRadius: 19,
    },
    successbackgroundColor: {
        backgroundColor: COLORS.primary,
    },
    successBorderColor: {borderColor: COLORS.primary,},
    successTextColor: {color: COLORS.primary},
    toggleText: {
        fontSize: 10,
        fontFamily: "Roboto-Black",
        color: COLORS.darkgray
    }
})