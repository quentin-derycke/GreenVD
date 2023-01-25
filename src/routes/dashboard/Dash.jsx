import {React, useState} from "react";
import { useLoaderData } from 'react-router-dom';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
export default function Dash() 

{

     const salesByYear = useLoaderData();


const months =    salesByYear.map((salesByMonth) => salesByMonth.month )
const sales = []

for(let i = 0; i < 12; i++) {
    sales[i] = salesByYear[i]? salesByYear[i].total : 0
}



const chartData = {

    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
      {
        label: "Vente pour l'année 2023",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sales 
      },
    ],
  };

    return(
<>

                <h1 >Dashboard</h1>
                <Line data={chartData}  />
    </>
                )
}