import React, { useEffect, useState } from "react";
import axios from "axios";

import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";


function GetProducts() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((data) => {
      console.log(data.data);
      setproducts(data?.data["hydra:member"]);
    });
  }, []);

  return ( products )
    
}


export {GetProducts };