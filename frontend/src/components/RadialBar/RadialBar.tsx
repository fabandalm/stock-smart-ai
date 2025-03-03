import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { AllProducts } from "../../services/ProductService";

type Props = {};

const RadialBar = (props: Props) => {
  const [Chart, setChart] = useState<number[]>([0]); // The percentage for the radial bar

  useEffect(() => {
    const GetProducts = async () => {
      const response = await AllProducts();
      let charts: number = 0;
      response.forEach((element) => {
        charts += element.quantity;
      });
      setChart([(charts / 5000) | 0]);
    };
    GetProducts();
  }, []);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 150, // Reduced height
      type: "radialBar",
      offsetY: -5, // Reduced offset
    },
    plotOptions: {
      radialBar: {
        startAngle: -130,
        endAngle: 130,
        dataLabels: {
          name: {
            fontSize: "18px", // Reduced font size for the label name
            color: undefined,
            offsetY: 70, // Further adjusted for smaller height
          },
          value: {
            offsetY: 0, // Reduced offset for the value
            fontSize: "24px", // Reduced font size for the value
            color: undefined,
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: [`Filling Capacity ${Chart[0] * 5} k / 500 k`], // Split into two lines
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={Chart}
          type="radialBar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialBar;
