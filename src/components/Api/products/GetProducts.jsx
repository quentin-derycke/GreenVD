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

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Products() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products").then((data) => {
      console.log(data.data);
      setproducts(data?.data["hydra:member"]);
    });
  }, []);

  return (
    <>
      <h2> Liste: </h2>

      <Grid
        container
        rowSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        
      >
        {products.map((item, i) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      {item.image.length > 0 ? (
                        <>
                          <Img
                            src={"http://127.0.0.1:8000" + item.image[0].path}
                            alt={item.image[0].alt}
                          ></Img>
                        </>
                      ) : (
                        ""
                      )}
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                  
                      <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.reference}
                        </Typography>

                        <Grid item>
                          <Typography variant="subtitle1" component="div">
                            {item.price}€
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          {item.categoryId.name}
                        </Typography>
                        </Grid>

                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
