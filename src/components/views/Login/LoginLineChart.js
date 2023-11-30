import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, FONTS, commonStyles } from '../../../constant/theme'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import VerticalSpace from '../VerticalSpace';
import { genericRatio } from '../../../helper/helper';

const data=[ {value:50, label:'1'}, {value:80, label:'2'}, {value:90, label:'3'}, {value:70, label:'4'} ]

const LoginLineChart = () => {
  return (
    <View style={[commonStyles.fullWidth, {}]}>
      <Text style={[FONTS.h4]}>{"Revenue"}</Text>
      <VerticalSpace />
      <View style={[commonStyles.center, commonStyles.fullWidth, {}]}>

        <LineChart
          areaChart
          curved
          initialSpacing={0}
          data={data}
          spacing={60}
          hideDataPoints
          thickness={5}
          width={300}
          height={160}
          yAxisColor={COLORS.primary}
          verticalLinesColor="rgba(14,164,164,0.5)"
          color1="skyblue"
          color2="orange"
          color3="aqua"
          dataPointsColor1="blue"
          dataPointsColor2="red"
          dataPointsColor3="aqua"
          startFillColor1="skyblue"
          startFillColor2="orange"
          startFillColor3="aqua"
          startOpacity={0.8}
          endOpacity={0.3}
          xAxisColor={COLORS.primary}
          color={COLORS.primary}
        />
      </View>
    </View>
  )
}

export default memo(LoginLineChart)

const styles = StyleSheet.create({})