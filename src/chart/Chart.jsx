import React from "react";
import Chart from "react-apexcharts";

const options = {
  labels: ["Expense", "Income"],
  colors: ["#f63426", "#213ebf"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: {
    mode: null,
  },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#f63426", "#213ebf"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

function ChartSummary({ expense = 100, income = 200 }) {
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type="pie"
      height={"100%"}
      width={"100%"}
    />
  );
}

export default ChartSummary;
