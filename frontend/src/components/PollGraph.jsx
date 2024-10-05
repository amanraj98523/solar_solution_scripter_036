import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Heading } from "@chakra-ui/react";

export const PollGraph = () => {
  const data = [
    { pollType: "MCQ", users: 200 },
    { pollType: "Binary", users: 150 },
    { pollType: "Slider", users: 100 },
  ];

  const COLORS = ["#640D5F", "#EE66A6", "#D91656"];

  return (
    <div style={{ width: "100%", height: 400, marginBottom: "2vw" }}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Admin Dashboard
      </Heading>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="users"
            nameKey="pollType"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8853bf"
            label={(entry) => entry.pollType}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
