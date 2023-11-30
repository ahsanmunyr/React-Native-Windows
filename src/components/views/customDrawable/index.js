import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Entypo, Feather, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, Zocial } from '../../../constant/icon'
import { genericRatio, hardScreenNavigation } from '../../../helper/helper'
import VerticalSpace from '../VerticalSpace'
import HorizontalSpace from '../HorizontalSpace'
import { PlaceHolderImage } from '../../../constant/images'
import { useDispatch, useSelector } from 'react-redux'
import ModalContainer from '../ModalContainer'
import BottomButtonModel from '../BottomButtonModel'
import { logout } from '../../../redux/reducers/user'
import { allClear } from '../../../redux/reducers/saveFilter'
import { hide, show } from '../../../redux/reducers/spinner'

const CustomDrawable = ({ state, navigation, descriptors }) => {
    const user = useSelector(x => x.user)
    const dispatch = useDispatch()
    const drawableData = useSelector(x => x.user.drawableData)
    const refList = useRef({})
    const Focused = useMemo(() => {
        const { key, name = "", params } = state.routes[state.index];
        console.log(name)

        return name
    }, [state])
    const showFocus = useCallback((routeName) => {
        return Focused === routeName
    }, [Focused])
    const navigationError = useCallback((routeName) => {
        try {
            navigation.navigate(routeName)
        } catch (err) {
            console.warn(err?.message || 'error navigation here')
        }
    }, [navigation])

    const changeBackground = useCallback((routeName) => {
        let obj = {}
        if (Focused === routeName) {
            obj['backgroundColor'] = COLORS.primary
        }
        return obj
    }, [Focused])
    const changeIconColor = useCallback((routeName) => {
        let IconColor = COLORS.primary
        if (Focused === routeName) {
            IconColor = COLORS.secondary
        }
        return IconColor
    }, [Focused])

    const changeTextColor = useCallback((routeName) => {
        let obj = {}
        if (Focused === routeName) {
            obj['color'] = COLORS.secondary
        }
        return obj
    }, [Focused])

    const RenderDrawableMenu = useCallback(() => {
        let itemOfArrays = []
        let container = []
        drawableData.forEach((val, index) => {
            itemOfArrays.push(<><VerticalSpace />
                <TouchableOpacity style={[changeBackground(val.Value), commonStyles.rowDirectionCenter, styles.itemContainer]}
                    key={index} onPress={() => navigationError(val.Value)}>
                    {/* <MaterialIcons name="inventory" size={genericRatio(20)} 
                color={changeIconColor(val.Value)} /> */}
                    <IconPicker name={val.Value} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3, changeTextColor(val.Value)]}>{val.Value}</Text>
                </TouchableOpacity>
                <VerticalSpace /></>)
            if (index % 2 === 0 || drawableData.length - 1 === index) {
                container.push(<View style={[styles.boxContainer, { paddingVertical: 0 }]} key={index}>{itemOfArrays}</View>)
                container.push(<VerticalSpace />)
                itemOfArrays = []
            }
        })
        return container
    }, [drawableData, changeBackground, changeIconColor, changeTextColor])

    const IconPicker = useCallback(({ name }) => {
        const iconSize = genericRatio(20)
        const iconList = {
            'Dashboard': <Feather name={"home"} color={changeIconColor(name)} size={iconSize} />,
            'Statistics': <MaterialIcons name={"query-stats"} color={changeIconColor(name)} size={iconSize} />,
            'Finance': <MaterialCommunityIcons name={"finance"} color={changeIconColor(name)} size={iconSize} />,
            'Receipts': <Ionicons name={"receipt"} color={changeIconColor(name)} size={iconSize} />,
            'Inventory': <MaterialIcons name={"inventory"} color={changeIconColor(name)} size={iconSize} />,
            'Location': <FontAwesome6 name={"location-arrow"} color={changeIconColor(name)} size={iconSize} />,
            'Location Sale': <FontAwesome6 name={"magnifying-glass-location"} color={changeIconColor(name)} size={iconSize} />,
        }
        return iconList[name] || <Entypo name="network" color={changeIconColor(name)} size={iconSize} />
    }, [changeIconColor])

    const OTPmodalOpen = useCallback(() => {
        refList.current['modal'].show()
        navigation.toggleDrawer()
    }, [refList, navigation])

    const ModalOTP = useCallback(({ }) => (
        <ModalContainer ref={(Ref) => refList.current['modal'] = Ref} allowCloseBackDropBool={false}>
            <View style={[commonStyles.fullWidth, commonStyles.center]}>
                <Text style={[FONTS.h3]}>{"Your OTP Code is "}</Text>
                {/* <VerticalSpace /> */}
                <Text style={[FONTS.h1, { fontFamily: "Montserrat-Bold", color: COLORS.primary }]}>{"9856"}</Text>
                <VerticalSpace />
                <View style={[
                    commonStyles.fullWidth,
                    commonStyles.rowDirectionCenter, { justifyContent: 'flex-end', }]}>
                         <BottomButtonModel 
                        title={"Cancel"}
                        cb={() => refList.current['modal'].hide()}
                        textStyle={[FONTS.body4]}
                        container={[styles.bottomBtn, commonStyles.center]} />
                        <HorizontalSpace />
                        <BottomButtonModel 
                        title={"Confirm"}
                        cb={() => refList.current['modal'].hide()}
                        textStyle={[FONTS.body4, {color: 'white'}]}
                        container={[styles.bottomBtn, commonStyles.center, { backgroundColor: COLORS.primary }]} />
                </View>
            </View>
        </ModalContainer>
    ), [])
    const Logout = useCallback(() => {
        dispatch(show('Logout...'))
        dispatch(logout())
        dispatch(allClear())
        hardScreenNavigation(navigation, "Login")
        dispatch(hide())
        
    }, [])
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[commonStyles.fillFullScreen, { backgroundColor: 'rgba(0,0,0,0)' }]}
            contentContainerStyle={styles.containr}>
            <View style={[styles.boxContainer, commonStyles.center]}>
                <View style={[commonStyles.rowDirectionCenter]}>
                    <Entypo name="network" color={COLORS.primary} size={genericRatio(30)} />
                    <HorizontalSpace />
                    <Text style={[FONTS.h2]}>{"Hello There"}</Text>
                </View>
            </View>
            <VerticalSpace />
            <View style={[styles.boxContainer]}>
                <View style={[commonStyles.rowDirection]}>
                    <Image source={PlaceHolderImage} style={{ height: genericRatio(60), width: genericRatio(60), borderRadius: genericRatio(60) }} />
                    <View style={{ paddingHorizontal: 5 }}>
                        <Text style={[FONTS.h3, { fontSize: genericRatio(18) }]}>{"Taha Salman"}</Text>
                        <Text style={[FONTS.body3, { fontSize: genericRatio(12), flexShrink: 1 }]}>{"Mobile application developer"}</Text>
                        <Text style={[FONTS.h4, { fontSize: genericRatio(10) }]}>{"TahaSalman@webotiks.com"}</Text>
                    </View>
                </View>

            </View>
            <VerticalSpace />

            <RenderDrawableMenu />
            
            <View style={styles.boxContainer}>
            <TouchableOpacity style={[changeBackground("Sales"), commonStyles.rowDirectionCenter, styles.itemContainer]}
                    onPress={() => navigationError('Sales')}
                >
                    <MaterialIcons name="point-of-sale" size={genericRatio(20)} color={changeIconColor("Sales")} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3, changeTextColor("Sales")]}>Sales</Text>
                </TouchableOpacity>
            </View>
            <VerticalSpace />
            <View style={styles.boxContainer}>
                <TouchableOpacity style={[commonStyles.rowDirectionCenter, styles.itemContainer]}
                    onPress={OTPmodalOpen}
                >
                    <MaterialIcons name="logout" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Load Otp Code</Text>
                </TouchableOpacity>
                <VerticalSpace />
                <TouchableOpacity style={[commonStyles.rowDirectionCenter, styles.itemContainer]}
                onPress={Logout}
                >
                    <MaterialIcons name="logout" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Log out</Text>
                </TouchableOpacity>
            </View>

            <ModalOTP />
        </ScrollView>
    )
}

export default memo(CustomDrawable)

const styles = StyleSheet.create({
    containr: {
        paddingVertical: 10, paddingHorizontal: 5
    },
    boxContainer: {
        backgroundColor: COLORS.secondary,
        width: '100%',
        paddingHorizontal: 8,
        padding: 8,
        borderRadius: 5,
    },
    itemContainer: {
        padding: 8
    },
    bottomBtn: {
        paddingVertical: 5,
        width: genericRatio(100),
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.darkgray
    }
})


{/* <View style={styles.boxContainer}>
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer,
                     showFocus("Dashboard") && {backgroundColor: COLORS.primary} ]}>
                    <Feather name="home" size={genericRatio(20)} 
                    color={showFocus("Dashboard") ? COLORS.secondary : COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3, showFocus("Dashboard") && {color: COLORS.secondary}]}>Dashboad</Text>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer, 
                    showFocus("Statistics") && {backgroundColor: COLORS.primary} ]}>
                    <Entypo name="bar-graph" size={genericRatio(20)} 
                    color={showFocus("Statistics") ? COLORS.secondary : COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3, showFocus("Statistics") && {color: COLORS.secondary}]}>Statistics</Text>
                </View>
            </View>
            <VerticalSpace />
            <View style={styles.boxContainer}>
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <MaterialCommunityIcons name="finance" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Finance</Text>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <Ionicons name="receipt" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Receipts</Text>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <MaterialIcons name="inventory" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Inventory</Text>
                </View>
            </View>
            
            <VerticalSpace />
            <View style={styles.boxContainer}>
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <Zocial name="statusnet" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Locations</Text>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <MaterialIcons name="local-convenience-store" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Locations Sale</Text>
                </View>
                <VerticalSpace />
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <MaterialIcons name="set-meal" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Location Status</Text>
                </View>
            </View>
            <VerticalSpace />
            <View style={styles.boxContainer}>
                <View style={[commonStyles.rowDirectionCenter, styles.itemContainer]}>
                    <MaterialIcons name="sms" size={genericRatio(20)} color={COLORS.primary} />
                    <HorizontalSpace />
                    <Text style={[FONTS.body3]}>Load OTP Code</Text>
                </View>
            </View>

            <VerticalSpace /> */}