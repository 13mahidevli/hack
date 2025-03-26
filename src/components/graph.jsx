import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../index.css";

const CarbonFootprintGraph = () => {
  // Sample Data for Carbon Footprint (in metric tons)
  const data = [
    { month: "Jan", carbon: 120 },
    { month: "Feb", carbon: 110 },
    { month: "Mar", carbon: 150 },
    { month: "Apr", carbon: 130 },
    { month: "May", carbon: 160 },
    { month: "Jun", carbon: 140 },
    { month: "Jul", carbon: 170 },
    { month: "Aug", carbon: 180 },
    { month: "Sep", carbon: 155 },
    { month: "Oct", carbon: 165 },
    { month: "Nov", carbon: 145 },
    { month: "Dec", carbon: 135 },
  ];

  return (
    <div className="graph-container">
      <h2>Carbon Footprint Over a Year</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Metric Tons", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="carbon" stroke="#ff6b6b" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CarbonFootprintGraph;