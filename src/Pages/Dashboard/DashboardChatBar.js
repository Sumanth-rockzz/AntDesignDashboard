import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { getRevenue } from "../../API/API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChatBar = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      // Define a function to determine bar colors based on conditions
      const getBarColor = (value) => {
        if (value < 2000) return "rgba(255, 0, 0, 0.5)"; // Red
        if (value < 4000) return "rgba(255, 165, 0, 0.5)"; // Orange
        if (value < 6000) return "rgba(255, 255, 0, 0.5)"; // Yellow
        if (value < 8000) return "rgba(0, 128, 0, 0.5)"; // Green
        return "rgba(0, 0, 255, 0.5)"; // Blue
      };

      const backgroundColors = data.map(getBarColor);

      const datasets = [
        {
          label: "Revenue",
          data: data,
          backgroundColor: backgroundColors,
        },
      ];

      const dataSource = {
        labels,
        datasets,
      };

      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
    scales: {
      x: {
        beginAtZero: false, // Start the x-axis from zero
      },
      y: {
        ticks: {
          font: {
            size: 14, // Adjust font size
            weight: "bold", // Set font weight to bold
          },
        },
      },
    },
  };

  return (
    <Card style={{ width: 600, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
};

export default DashboardChatBar;
