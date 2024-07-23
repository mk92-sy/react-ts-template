import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDarkMode } from "context/DarakModeContext";
import { Bar } from "react-chartjs-2";

//기본 Bar 차트
//https://react-chartjs-2.js.org/components/bar

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title?: string;
  labels: string[];
  datasets: any[];
}

export default function BarChart({ title, labels, datasets }: BarChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const { darkMode } = useDarkMode();
  return (
    <Bar
      options={options}
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
}
