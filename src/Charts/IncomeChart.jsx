import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function IncomeChart({ incomeList }) {
  const sortedIncome = [...incomeList].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = {
    labels: sortedIncome.map(item =>
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Income",
        data: sortedIncome.map(item => item.amount),
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date"
        }
      },
      y: {
        title: {
          display: true,
          text: "Amount"
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}
