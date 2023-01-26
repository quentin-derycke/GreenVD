import { React, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MenuItem, TextField } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/* Base URL */
const baseURL = "http://localhost:8000/api";

/* Header [x-access-token] */
const instanceAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { "x-access-token": localStorage.getItem("token") },
});

export default function Dash() {
  const [annee, setAnnee] = useState(2023);
  const [chartDataY, setChartDataY] = useState({
    labels: [
      "Janvier",
      "Fevrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "Vente pour l'année 2023",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  });

  let salesByYear; //  = useLoaderData(42);

  useEffect(() => {
    instanceAxios
      .get(`${baseURL}/RevenueByYear/` + annee)
      .then((response) => {
        salesByYear = response.data;

        const sales = [];

        for (let i = 0; i < 12; i++) {
          sales[i] = salesByYear[i] ? salesByYear[i].total : 0;
        }

        setChartDataY({
          labels: [
            "Janvier",
            "Fevrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
          ],
          datasets: [
            {
              label: "Vente pour l'année 2023",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: sales,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [annee]);

  console.log(salesByYear);
  const [supplier, setSupplier] = useState("Fender");
  const [supplierSales, setSupplierSales] = useState([]);

  useEffect(() => {
    instanceAxios
      .get(`${baseURL}/SalesBySupplier/${supplier}`)
      .then((response) => {
        setSupplierSales(response.data);
      });
  }, [supplier]);

  console.log(supplierSales);

  return (
    <Box height={1000} width={1000}>
      <h1>Dashboard</h1>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Année"
            defaultValue={annee}
            onChange={(e) => setAnnee(e.target.value)}
            helperText="Selectionnez une année"
          >
            <MenuItem value="2021"> 2021</MenuItem>
            <MenuItem value="2022">2022 </MenuItem>
            <MenuItem value="2023">2023 </MenuItem>
            <MenuItem value="2024">2024 </MenuItem>
            <MenuItem value="2025">2025 </MenuItem>
            <MenuItem value="2026">2026 </MenuItem>
            <MenuItem value="2027">2027 </MenuItem>
            <MenuItem value="2028">2028 </MenuItem>
          </TextField>
          <Line data={chartDataY} />
        </Grid>

        <Grid item xs={4}>
          <Paper>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Revenue par Fournisseur"
              defaultValue={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              helperText="Selectionnez un fournisseur"
            >
              <MenuItem value="Fender">Fender</MenuItem>
              <MenuItem value="Gibson">Gibson</MenuItem>
              <MenuItem value="Epiphone">Epiphone </MenuItem>
              <MenuItem value="Cort">Cort </MenuItem>
            </TextField>
            <p>
              {supplierSales[0] === undefined ? "0" : supplierSales[0].total} €
            </p>{" "}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
