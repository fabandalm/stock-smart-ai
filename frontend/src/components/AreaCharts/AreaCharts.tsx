import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import {
  GetInboundStatus,
  GetOutboundStatus,
} from "../../services/ChartsService";

type Props = {};

const AreaCharts = (props: Props) => {
  const [outboundData, setOutboundData] = useState<number[]>([]);
  const [inboundData, setInboundData] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const outboundStatus = await GetOutboundStatus();
        const inboundStatus = await GetInboundStatus();

        // Extracting the data and month (assuming month format is consistent with categories)
        const outboundQuantities = outboundStatus.map(
          (item) => item.totalQuantity
        );
        const inboundQuantities = inboundStatus.map(
          (item) => item.totalQuantity
        );
        const months = outboundStatus.map((item) => item.month); // Assuming both responses have the same months

        setOutboundData(outboundQuantities);
        setInboundData(inboundQuantities);
        setCategories(months);
      } catch (error) {
        console.error("Error fetching stock progress", error);
      }
    };
    fetchData();
  }, []);

  const series = [
    {
      name: "Inbound Stock",
      data: inboundData,
    },
    {
      name: "Outbound Stock",
      data: outboundData,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: categories,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AreaCharts;
