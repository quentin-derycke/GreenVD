import {React, useState} from "react";

import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";



export const LineChart = () => {
  const [selectedYear, setSelectedYear] = useState();
  
  const handleYearSelect = (e) => {
    setSelectedYear(e.target.value);
  }
  

   
  
  const chartData = {

    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data:
      },
    ],
  };
  
  return (
    <div>
      <select onChange={handleYearSelect}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      <Line data={chartData} />
    </div>
  ); 
};

