
import { useLoaderData } from "react-router-dom";
import axios from "axios";


import { CardContent, CardMedia, Typography } from "@mui/material";
import {Card } from '@mui/material'
import Grid from '@mui/material/Grid'; 





export const loader = async ({ params }) => {
    return   (await axios.get(`http://127.0.0.1:8000/api/categories/${params.id}.json`)).data;
   
}



export const SubCategories = () => {
   const categories = useLoaderData();
console.log(categories);



    return( 
        <>
        
     <h1>{categories.name} </h1>
{console.log(categories.parent)}
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
{categories.parent.map(sousCat =>
(
    <>
    <Grid item xs={6}>
               <Card sx={{maxWidth: 345 }} key={sousCat["@id"]}>   
               {sousCat.Image ? (
                
                        <>
                     
                          <CardMedia
                          component="img"
                          height='140'
                            image={"http://127.0.0.1:8000" + sousCat.Image.path}
                            alt={sousCat.Image.alt}
                          ></CardMedia>
                         
                        </>
                      ) : (
                        ""
                      )}
                      <CardContent>
                        <Typography gutterBottom="h5" component='div'>
                          {sousCat.name}
                        </Typography>
                        
                      </CardContent>
            
                </Card>
               </Grid>

</>
))}
 
</Grid>

 </>

    )
}
