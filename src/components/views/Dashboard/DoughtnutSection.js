import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import PieChart from 'react-native-pie-chart'
import HorizontalSpace from '../HorizontalSpace'
import { dateStatusConvertToDate, genericRatio, textDotDot } from '../../../helper/helper'
import { useHttp } from '../../../customHooks'

const DoughtnutSection = ({ mode }) => {
    const { GetGraphData } = useHttp()
    const [States, SetStates] = useState({
        'loading': false,
        'Revenue': { value: 10, color: '#3847A5' },
        'GrossSales': { value: 15, color: '#2F7A77' },
        'Net Sales': { value: 18, color: '#AC3ABB' },
        'Discount': { value: 25, color: '#EE7930' },
        'Service Charges': { value: 45, color: '#F7AC38' },
        'Total Receipt': { value: 30, color: '#B1E33D' },
    })
    const widthAndHeight = useMemo(() => genericRatio(120), [])

    const renderLoaderCB = useCallback((bool = false) => SetStates((prev) => ({ ...prev, 'loading': bool })), [States])

    const RowColumnTextValue = useCallback(({ title, val, color }) => (
        <View style={[commonStyles.rowDirectionCenter]}>
            <View style={[styles.DOT, { backgroundColor: color }]} />
            <HorizontalSpace />
            <View style={[commonStyles.rowDirectionCenter]}>
                <Text style={[FONTS.body3, styles.Title]}>{title + ': '}</Text>
                <Text style={[FONTS.body4, styles.TitleValue]}>{textDotDot(val.toString(), 5)}</Text>
            </View>
        </View>
    ), [])

    const PieChartValueColor = useMemo(() => {
        let value = []
        let color = []
        Object.entries(States).forEach((val, index) => {
            if (val[0] !== 'loading') {
                value.push(val[1].value)
                color.push(val[1].color)
            }
        })
        return { value, color }
    }, [States])

    const Section = useCallback(() => {
        if (States.loading) return <ActivityIndicator size={'large'} color={COLORS.primary} />
        return (<>
            <View style={[commonStyles.fillFullScreen, commonStyles.center]}>
            <PieChart
                widthAndHeight={widthAndHeight}
                series={PieChartValueColor.value}
                sliceColor={PieChartValueColor.color}
                coverRadius={0.45}
                coverFill={'#FFF'}
                
            />
            </View>
            <View style={[commonStyles.fillFullScreen]}>
                <RowColumnTextValue title={'Revenue'} val={States['Revenue'].value} color={States['Revenue'].color} />
                <RowColumnTextValue title={'Gross Sales'} val={States['GrossSales'].value} color={States['GrossSales'].color} />
                <RowColumnTextValue title={'Net Sales'} val={States['Net Sales'].value} color={States['Net Sales'].color} />
                <RowColumnTextValue title={'Discount'} val={States['Discount'].value} color={States['Discount'].color} />
                <RowColumnTextValue title={'Service Charges'} val={States['Service Charges'].value} color={States['Service Charges'].color} />
                <RowColumnTextValue title={'Total Receipt'} val={States['Total Receipt'].value} color={States['Total Receipt'].color} />
            </View>
        </>)
    }, [States, PieChartValueColor])

    useEffect(() => {
        const DateRange = dateStatusConvertToDate(mode)
        renderLoaderCB(true)
        GetGraphData({ ...DateRange }, ({ GraphData = [], Sales = [] }, error) => {
            if (error) {
                renderLoaderCB(false)
                console.log('error occur', 'Dashboad => useEffect => GetGraphData')
                return;
            }
            console.log({Sales})
            let data = { ...States }
            Sales.forEach((val, index) => {
                let obj = {}
                switch (val.Title) {
                    case 'Revenue':
                        obj = { ...data['Revenue'] }
                        obj['value'] = val.Value
                        data['Revenue'] = {...obj}
                        return;
                    case 'GrossSales':
                        obj = { ...data['GrossSales'] }
                        obj['value'] = val.Value
                        data['GrossSales'] = {...obj}
                        return;
                    case 'Net Sales':
                        obj = { ...data['Net Sales'] }
                        obj['value'] = val.Value
                        data['Net Sales'] = {...obj}
                        return;
                    case 'Discount':
                        obj = { ...data['Discount'] }
                        obj['value'] = val.Value
                        data['Discount'] = {...obj}
                        return;
                    case 'Service Charges':
                        obj = { ...data['Service Charges'] }
                        obj['value'] = val.Value
                        data['Service Charges'] = {...obj}
                        return;
                    case 'Total Receipt':
                        obj = { ...data['Total Receipt'] }
                        obj['value'] = val.Value
                        data['Total Receipt'] = {...obj}
                        return;
                }
            })
            console.log({data})
            SetStates({...data, "loading": false})
        })
    }, [mode])

    return (
        <View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter,
        commonStyles.spaceBetween, { justifyContent: 'space-around' }]}>
            <Section />
        </View>
    )
}

export default memo(DoughtnutSection)

const styles = StyleSheet.create({
    DOT: { height: genericRatio(10), width: genericRatio(2), backgroundColor: 'red', borderRadius: 10 },
    Title: {
        color: '#999', fontFamily: 'Inter-Medium'
    },
    TitleValue: {
        color: '#000', fontFamily: 'Inter-SemiBold'
    }
})