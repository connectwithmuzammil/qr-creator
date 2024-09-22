// import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";

// export default function LineChartComp({dates,scans}) {
//   return (
//     <LineChart
//       xAxis={[{ data: [0, 0.2, 0.4, 0.6, 0.8, 1.0] }]}
//       series={[
//         {
//           data: [0.1, 0.3, 0.5, 0.7, 0.9, 1.0],
//         },
//       ]}
//       width={600}
//       height={300}
//     />
//   );
// }

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { "month": 1, "scans": 120 },
//   { "month": 2, "scans": 200 },
//   { "month": 3, "scans": 300 },
//   { "month": 4, "scans": 250 },
//   { "month": 5, "scans": 400 },
//   { "month": 6, "scans": 500 },
//   { "month": 7, "scans": 450 },
//   { "month": 8, "scans": 600 }
// ];

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const formattedData = data.map(item => ({
//   name: monthNames[item.month - 1], // Convert month number to name
//   scans: item.scans,
// }));

const LineChartComp = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* Single line for QR code scan activity */}
      <Line type="monotone" dataKey="scans" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default LineChartComp;

