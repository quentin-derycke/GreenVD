
import { CardContent, CardMedia, Typography } from "@mui/material";
import {Card } from '@mui/material'
import Grid from '@mui/material/Grid'; 
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";









export default function Categories() {
   const categories = useLoaderData();


const parentCategories = categories.filter(category => category.parent && category.parent.length > 0);

    return( 
        <>
     <h1> Categories </h1>

     
        {console.log(parentCategories)}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {parentCategories.map(category => (

              <Grid item xs={6}>
               <Card sx={{maxWidth: 345 }} key={category["@id"]}>   
               <Link to={`/categories/${category.id}`}>
               {category.Image ? (
                
                        <>
                     
                          <CardMedia
                          component="img"
                          height='140'
                            image={"http://127.0.0.1:8000" + category.Image.path}
                            alt={category.Image.alt}
                          ></CardMedia>
                         
                        </>
                      ) : (
                        ""
                      )}
                      <CardContent>
                        <Typography gutterBottom="h5" component='div'>
                          {category.name}
                        </Typography>
                        
                      </CardContent>
                </Link>
                </Card>
               </Grid>
            ))}
        </Grid>
    
 
 </>
 
    )
}
