import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "../../supabaseClient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type WeeklyExpenseData = {
  week_start: string;
  total_expense: number;
};

const ChartPengeluaran: React.FC = () => {
  const [data, setData] = useState<WeeklyExpenseData[]>([]);
  const weeksBack = 4;

  useEffect(() => {
    const fetchMultiWeeklyExpenses = async () => {
      const { data, error } = await supabase.rpc("get_multi_weekly_expenses", {
        weeks_back: weeksBack,
      });

      if (error) console.error(error);
      else setData(data as WeeklyExpenseData[]);
    };

    fetchMultiWeeklyExpenses();
  }, [weeksBack]);

  const chartData = {
    labels: data.map((d) => `Minggu mulai ${d.week_start}`),
    datasets: [
      {
        label: "Pengeluaran Mingguan (IDR)",
        data: data.map((d) => d.total_expense),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Total Pengeluaran untuk ${weeksBack} Minggu Terakhir`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "445px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "auto",
        maxWidth: "1000px",
      }}
    >
      {data.length > 0 ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Memuat data...</p>
      )}
    </div>
  );
};

export default ChartPengeluaran;
