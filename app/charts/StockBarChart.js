import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart, XAxis, YAxis } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';

const StockBarChart = ({ stockData }) => {
  // Extract unique dates from stockData
  const uniqueDates = Array.from(new Set(stockData.map((day) => day.date)));
  const data = {
    labels:uniqueDates,
    datasets: [
      {
        data: uniqueDates.map((date) => {
          const relevantData = stockData.filter((day) => day.date === date);
          const average=
            relevantData.reduce((sum, day) => sum + day.average, 0) / relevantData.length;
        return average
          }),
      }
    ]
  };
  //const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  const graphStyle = {
    marginVertical: 8,
  };

  return (
    <ScrollView horizontal>
    <View>
      <Text>Stock Bar Chart</Text>
      <BarChart
        style={graphStyle}
        data={data}
        width={500}
        height={320}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
    </ScrollView>
  );
};

export default StockBarChart;
