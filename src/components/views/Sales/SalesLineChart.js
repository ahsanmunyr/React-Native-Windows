import { StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  FONTS,
  LinePieColors,
  SIZES,
  commonStyles,
} from "../../../constant/theme";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { genericRatio, getRandomValueRange } from "../../../helper/helper";
import VerticalSpace from "../VerticalSpace";

const SalesLineChart = ({ title, value, key }) => {
  const colorSelector = useMemo(() => {
    return LinePieColors[title];
  }, []);
  const LineChartData = useMemo(() => {
    let arr = [];
    arr.push(
      { value: 0 },
      { value: getRandomValueRange(10, 15) },
      { value: getRandomValueRange(60, 90) },
      { value: getRandomValueRange(8, 12) },
      { value: getRandomValueRange(40, 60) }
    );
    return arr;
  }, []);
  return (
    <View
      key={key}
      style={[
        commonStyles.shadow,
        styles.mainContainer,
        { backgroundColor: "white" },
      ]}
    >
      <View
        style={[
          { flexDirection: "column" },
          commonStyles.spaceBetween,
          { paddingHorizontal: 10 },
        ]}
      >
        <Text style={[FONTS.body3, { color: "#999999" }]}>{title}</Text>
        <Text style={[FONTS.body2, { color: "black", fontWeight:'800' }]}>{value}</Text>
      </View>
      <VerticalSpace /> 
      <LineChart
        initialSpacing={0}
        data={LineChartData}
        spacing={38}
        height={genericRatio(10)}
        // width={200}
        disableScroll
        noOfSections={1.4}
        hideDataPoints
        thickness={3}
        hideRules
        hideYAxisText
        yAxisColor={colorSelector}
        // showVerticalLines
        verticalLinesColor={colorSelector}
        xAxisColor={colorSelector}
        color={colorSelector}
      />
    </View>
  );
};

export default memo(SalesLineChart);

const styles = StyleSheet.create({
  mainContainer: { paddingVertical: 10, borderRadius: 10 },
});
