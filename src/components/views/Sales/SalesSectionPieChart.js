import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import PieChart from 'react-native-pie-chart'
import HorizontalSpace from '../HorizontalSpace'
import { dateStatusConvertToDate, genericRatio, textDotDot } from '../../../helper/helper'
import VerticalSpace from '../VerticalSpace'

const SalesSectionPieChart = ({ Sale, date}) => {
    const [States, SetStates] = useState({
        'Revenue': { value: 10, color: '#3847A5' },
        'GrossSales': { value: 15, color: '#2F7A77' },
        'Net Sales': { value: 18, color: '#AC3ABB' },
        'Discount': { value: 25, color: '#EE7930' },
        'Service Charges': { value: 45, color: '#F7AC38' },
        'Total Receipt': { value: 30, color: '#B1E33D' },
    })

    useEffect(() => {
        console.log({ Sale })
        let data = { ...States }
        Sale.forEach((val, index) => {
            let obj = {}
            switch (val.Title) {
                case 'Revenue':
                    obj = { ...data['Revenue'] }
                    obj['value'] = val.Value
                    data['Revenue'] = { ...obj }
                    return;
                case 'GrossSales':
                    obj = { ...data['GrossSales'] }
                    obj['value'] = val.Value
                    data['GrossSales'] = { ...obj }
                    return;
                case 'Net Sales':
                    obj = { ...data['Net Sales'] }
                    obj['value'] = val.Value
                    data['Net Sales'] = { ...obj }
                    return;
                case 'Discount':
                    obj = { ...data['Discount'] }
                    obj['value'] = val.Value
                    data['Discount'] = { ...obj }
                    return;
                case 'Service Charges':
                    obj = { ...data['Service Charges'] }
                    obj['value'] = val.Value
                    data['Service Charges'] = { ...obj }
                    return;
                case 'Total Receipt':
                    obj = { ...data['Total Receipt'] }
                    obj['value'] = val.Value
                    data['Total Receipt'] = { ...obj }
                    return;
            }
        })
        console.log({ data })
        SetStates({ ...data, })
    }, [Sale])

    const widthAndHeight = useMemo(() => genericRatio(120), [])

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
            value.push(val[1].value)
            color.push(val[1].color)
        })
        return { value, color }
    }, [States])

    const Section = useCallback(() => {

        return (<View style={[commonStyles.fullWidth, commonStyles.rowDirectionCenter,
        commonStyles.spaceBetween, { justifyContent: 'space-around' }]}>
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
        </View>
        )
    }, [States, PieChartValueColor])


    return (
        <View style={[commonStyles.shadow, styles.container, commonStyles.center]}>
            <Text style={[FONTS.body2, styles.SelectedHEaderText]}>{date + " Sales"}</Text>
            <VerticalSpace />
            <Section />
        </View>
    )
}

export default memo(SalesSectionPieChart)

const styles = StyleSheet.create({
    DOT: { height: genericRatio(15), width: genericRatio(5), backgroundColor: 'red', borderRadius: 10 },
    Title: {
        color: '#999', fontFamily: 'Inter-Medium'
    },
    TitleValue: {
        color: '#000', fontFamily: 'Inter-SemiBold'
    },
    container: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        borderRadius: 10
    },
    SelectedHEaderText: {
        fontFamily: 'Inter-SemiBold', color: '#000',
    }
})

