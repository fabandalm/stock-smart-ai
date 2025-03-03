import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { AllProducts } from "../../services/ProductService";

type Props = {};

const PieCharts = (props: Props) => {
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 200,
      type: "pie",
    },

    labels: labels,
    legend: {
      show: false, // Hide the legend
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  useEffect(() => {
    const GetProducts = async () => {
      const response = await AllProducts();
      setSeries(response.map((item) => item.quantity));
      setLabels(response.map((item) => item.name));
      setLoading(false);
    };
    GetProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <div id="chart">
          <Chart options={options} series={series} type="pie" height={200} />
        </div>
      )}
      <div id="html-dist"></div>
    </div>
  );
};

export default PieCharts;
