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

export default function AnalysisChart({ transactions, transactionType }) {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = {
    labels: sortedTransactions.map(item =>
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: transactionType,
        data: sortedTransactions.map(item => item.amount),
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
