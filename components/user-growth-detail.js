import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const UserGrowthDetail = () => {
  const [series] = useState([44, 55, 13]);
  const [options] = useState({
    chart: {
      width: 480,
      type: "pie",
    },
    labels: ["Daily", "Weekly", "Monthly"],
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="flex justify-center min-h-[400px] items-center mt-5">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={480}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default UserGrowthDetail;
