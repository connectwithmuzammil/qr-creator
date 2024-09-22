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

const data = [
  { name: 'Jan', scans: 120 },
  { name: 'Feb', scans: 200 },
  { name: 'Mar', scans: 300 },
  { name: 'Apr', scans: 250 },
  { name: 'May', scans: 400 },
  { name: 'Jun', scans: 500 },
  { name: 'Jul', scans: 450 },
  { name: 'Aug', scans: 600 },
];
const LineChartComp = () => {
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

