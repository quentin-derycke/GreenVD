

import { Product } from "../../components/Products/Product";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";


import { useLoaderData } from "react-router-dom";





export const Products = ()  =>  {


const products = useLoaderData();


console.log(products);


  return (
    <>
      <h1> Products </h1>
      {/* <GetProducts /> */}
      <>
        <Link component="button" variant="body2" to="/products/new">
          Add New pute
        </Link>
        <h2> Liste: </h2>

        <Grid
          container
          rowSpacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((item, i) => {
            return <Product item={item} key={i} />;
          })}
        </Grid>
      </>
      
    </>
  );
}
