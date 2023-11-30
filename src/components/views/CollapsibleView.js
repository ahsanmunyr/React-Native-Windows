import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, memo, useCallback, useId, useImperativeHandle, useState } from 'react'
import Collapsible from 'react-native-collapsible'

const CollapsibleView = forwardRef(({ children }, ref) => {
    const [collapsible, SetCollapsible] = useState(true)
    const toggleListPreview = useCallback((bool = false) => SetCollapsible(bool), [])
    const status = useCallback(() => collapsible, [collapsible])
    
    useImperativeHandle(ref, () => ({
        status,
        toggleListPreview,
    }),[collapsible])

    return (
        <Collapsible collapsed={collapsible}>{children}</Collapsible>
    )
})

export default memo(CollapsibleView)

const styles = StyleSheet.create({})