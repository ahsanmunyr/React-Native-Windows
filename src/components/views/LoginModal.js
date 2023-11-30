import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useState, useCallback, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import VerticalSpace from './VerticalSpace'
import { useHttp } from '../../customHooks'
import { genericRatio, showToastMsg } from '../../helper/helper'
import { useDispatch, useSelector } from 'react-redux'
import HorizontalSpace from './HorizontalSpace'
import Locationised from './Locationised'
import Tags from './Tags'
import { posDataSaved } from '../../redux/reducers/posdata'

const LoginModal = forwardRef(({ }, ref) => {
    const user = useSelector(x => x.user)
    const dispatch = useDispatch()
    const locationRef = useRef()
    const { POSLogin } = useHttp()

    const [fields, setFields] = useState({
        email: '', password: '', showLoginFields: false, progress: false,
    })
    const [NeedToLoginModalVisible, setNeedToLoginModalVisible] = useState(false)


    useImperativeHandle(ref, () => {
        return {
            loginModalCB: () => {
                let obj = { ...fields }
                const { adminEmail = '', adminPassword = '' } = user;
                loginHandler({ email: adminEmail, password: adminPassword })
                obj['email'] = adminEmail
                obj['password'] = adminPassword
                obj['progress'] = true
                setFields((prev) => ({ ...prev, ...obj }))

            }
        }
    }, [user])

    const onChangeValue = useCallback((mode, text) => {
        setFields(prev => ({ ...fields, [mode]: text }))
    }, [fields])


    const loginHandler = useCallback(({ email = "", password = "" }) => {
        const Email = fields['email'] || email
        const Password = fields['password'] || password
        if (Email === "") {
            return showToastMsg('error', 'Please enter email address')
        }
        if (Password === "") {
            return showToastMsg('error', 'Please enter password')
        }
        POSLogin({ Email, Password }, (response, error = true) => {
            let obj = { ...fields }
            obj['progress'] = false
            if (error) {
                obj['showLoginFields'] = true
                console.log('error occur')
                if (!NeedToLoginModalVisible) {
                    setNeedToLoginModalVisible(true)
                }
            } else {
                obj = { ...obj, ...response, showLoginFields: false }
                moveToDashboard(obj)
            }
            setFields({ ...obj })
            
            // if (!NeedToLoginModalVisible) {
            //     console.warn('here')
            //     setNeedToLoginModalVisible(true)
            // } else {
            //     console.warn('trigger timeout')
            //     setTimeout(() => moveToDashboard(), 5000)
            // }
            // console.log(obj)
        })
    }, [fields])

    const moveToDashboard = useCallback((data = {}) => {
        // const getSeletedItem = locationRef.current?.selectedStore()
        // if (!getSeletedItem) return showToastMsg('info', 'Please select one of location')
        const _data = Object.keys(data).length === 0 ? fields : data
        const { FranchiseList = [], SpecialInstruction = [], UserData = {} } = _data
        let obj = { FranchiseList, SpecialInstruction, UserData,   }
        if (FranchiseList.length === 1) {
            obj['selectedStore'] = 0
        }
        dispatch(posDataSaved({...obj}))
        onClose()
    }, [fields])

    const onClose = useCallback(() => {
        setNeedToLoginModalVisible(false)
    }, [])

    const ShowButtonBottomVisible = useCallback(() => {
        if (fields['progress']) return null;
        if (fields['showLoginFields']) {
            return (
                <>
                    <TouchableOpacity style={[commonStyles.center, styles.BTNContainerSignin,
                    { backgroundColor: 'red', flex: 1 }]}>
                        <Text style={[FONTS.body3, { color: 'white' }]}>{"Logout admin"}</Text>
                    </TouchableOpacity>

                    <HorizontalSpace />

                    <TouchableOpacity style={[commonStyles.center, styles.BTNContainerSignin, { flex: 1 }]}
                        onPress={loginHandler}>
                        <Text style={[FONTS.body3, { color: 'white', fontFamily: "Montserrat-Bold", }]}>{"Sign in"}</Text>
                    </TouchableOpacity></>
            )
        }
        return (
            <TouchableOpacity style={[commonStyles.center, commonStyles.fullWidth,
            styles.BTNContainerSignin, { paddingHorizontal: 10, }]}
                onPress={moveToDashboard}
            >
                <Text style={[FONTS.body3, styles.DashboardBtn]}>{"Welcome " + user?.PlaceName || ''}</Text>
            </TouchableOpacity>
        )

    }, [fields, user])

    return (
        <Modal animationType={"fade"}
            transparent
            visible={NeedToLoginModalVisible}>
            <View style={[commonStyles.fillFullScreen, commonStyles.center,
            { backgroundColor: COLORS.backdrop, zIndex: -1000 }]}>
                <View style={styles.loginfieldsBtnContainer}>
                    {fields['showLoginFields'] && <>
                        <Text style={[FONTS.h1, { fontFamily: "Montserrat-Bold" }]}>{'Store POS Login'}</Text>
                        <VerticalSpace />
                        <TextInput defaultValue={fields['email']}
                            placeholderTextColor={COLORS.darkgray}
                            onChangeText={(text) => onChangeValue('email', text)}
                            style={[commonStyles.fullWidth, styles.textInputContainer]}
                            placeholder='Enter email address' />

                        <VerticalSpace />

                        <TextInput defaultValue={fields['password']}
                            placeholderTextColor={COLORS.darkgray}
                            secureTextEntry
                            onChangeText={(text) => onChangeValue('password', text)}
                            style={[commonStyles.fullWidth, styles.textInputContainer]}
                            placeholder='Enter password' />
                        <VerticalSpace />

                    </>}

                    <Tags title={"Specialization"} data={fields['SpecialInstruction'] || []} />
                    <VerticalSpace />
                    {/* <Locationised 
                    CashDetailVisible={false}
                    ref={locationRef} title={"Location store"} data={fields['FranchiseList'] || []} />
                    <VerticalSpace /> */}

                    <VerticalSpace container={{ height: 15 }} />

                    <View style={[commonStyles.rowDirectionCenter, { flexWrap: 'wrap' }]}>
                        <ShowButtonBottomVisible />
                    </View>
                </View>
            </View>
        </Modal>
    )
})

export default memo(LoginModal)

const styles = StyleSheet.create({
    loginfieldsBtnContainer: {
        width: '90%',
        padding: 10, borderRadius: 10,
        backgroundColor: COLORS.secondary,
    },
    textInputContainer: {
        backgroundColor: COLORS.lightGray5, padding: 0, borderRadius: 10,
        paddingHorizontal: 10, paddingVertical: genericRatio(5),
        borderColor: COLORS.primary, borderWidth: 0.5,
    },
    DashboardBtn: { color: 'white', fontFamily: "Montserrat-Bold", },
    BTNContainerSignin: { backgroundColor: COLORS.primary, paddingVertical: genericRatio(5), borderRadius: 5, marginTop: 5 },
})