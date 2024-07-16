import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  percentage: number;
}

function DoughnutChart({ percentage = 70 }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)", // 주 데이터 색상
          "transparent", // 배경 색상 (회색)
        ],
        borderWidth: 0,
        borderRadius: 9999, // 끝을 둥글게 처리
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
      tooltip: {
        enabled: false, // 툴팁 비활성화
      },
    },
    cutout: "80%", // 도넛의 두께 조절
    circumference: 360, // 전체 원 그리기
    rotation: 0, // 시작 위치를 12시 방향으로 조정
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
