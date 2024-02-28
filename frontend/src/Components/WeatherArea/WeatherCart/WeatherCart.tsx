import React from "react";
import WeatherModel from "../../../Model/weatherModel";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface WeatherChartProps {
  data: WeatherModel;
}

const WeatherCart: React.FC<WeatherChartProps>  = ({ data }) => {
  
  const filteredData = data.list.filter((item, index) => index % 8 === 4);
  
  const dates = filteredData.map((item) => {
    const dateObject = new Date(item.dt_txt);
    return dateObject.toLocaleDateString("en-GB");
  });
const temperatures = filteredData.map((item) => item.main?.temp);
  
  const chartData = {
    labels: dates,

    datasets: [
      {
        label: "Temperature",
        data: temperatures,

        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="WeatherCart">

    <div className="bar">
        <Bar data={chartData} />
    </div>

    </div>
);
}

export default WeatherCart;
