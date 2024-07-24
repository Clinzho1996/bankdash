"use client";
import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function ExpenseCard() {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    datasets: [
      {
        label: "Expense Statistics",
        data: [300, 350, 450, 200, 370],
        backgroundColor: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF", "#000"],
        circular: true,
      },
    ],
  };
  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <PolarArea
        data={data}
        options={{
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

export default ExpenseCard;
