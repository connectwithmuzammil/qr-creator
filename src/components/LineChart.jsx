import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function LineChartComp() {
  return (
    <LineChart
      xAxis={[{ data: [0, 0.2, 0.4, 0.6, 0.8, 1.0] }]}
      series={[
        {
          data: [0.1, 0.3, 0.5, 0.7, 0.9, 1.0],
        },
      ]}
      width={600}
      height={300}
    />
  );
}
