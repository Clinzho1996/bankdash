"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

interface MonthsOptions {
  count?: number;
  section?: number;
}

function BalanceCard() {
  const months = (opts: MonthsOptions) => {
    const count = opts.count || 12;
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const labels = [];
    for (let i = 0; i < count; i++) {
      labels.push(monthNames[i % 12]);
    }
    return labels.slice(0, count);
  };

  const labels = months({ count: 7 });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Balance History",
        data: [65, 59, 70, 72, 56, 55, 40],
        borderColor: "#1814F3",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <Line
        data={data}
        options={{
          elements: {
            line: {
              borderJoinStyle: "round",
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default BalanceCard;
