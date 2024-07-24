"use client";
import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

interface MonthsOptions {
  count?: number;
}

function WeeklyCard() {
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
        label: "Deposit",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#1814F3",
      },
      {
        label: "Withdraw",
        data: [35, 45, 60, 47, 75, 65, 50],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
}

export default WeeklyCard;
