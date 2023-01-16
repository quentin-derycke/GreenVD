import React, {useEffect, useState } from "react";
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";



export default function Users() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products").then((data) => {
          console.log(data.data);
          setproducts(data?.data["hydra:member"]);
        });
      }, []);


    return(
        <>
            <h2> Liste:  </h2>
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
        {products.map((item,i) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={i}>
              <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
    
                <Card sx={{ maxWidth: 345}} key={i}> 
                {
                  (item.image.length > 0 )?
                  <>
                <CardMedia component="img"
                height="140"
               image={"http://127.0.0.1:8000" + item.image[0].path} 
               alt={item.image[0].alt} ></CardMedia>
                </>
                :
                ""
                }
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                
                </CardContent>
                </Card>
                </Paper>
                </Grid>
            );
        })}
        </Grid>
        </>
        )
}
