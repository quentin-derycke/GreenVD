import AddProduct from "../../components/Api/products/AddProduct"
import {GetProducts}  from "../../components/Api/products/GetProducts"
import { Product } from "../../components/Products/Product";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
export default function Products() {

     // Appel à l'API
     const products = GetProducts();


    return( 
    <>
    <h1> Products </h1>
    {/* <GetProducts /> */}
    <>
    <Link
  component="button"
  variant="body2"
to='/products/new'
>
 Add New
</Link>
      <h2> Liste: </h2>
  
      <Grid
        container
        rowSpacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        
      >
        {products.map((item, i ) => {
          return (
           <Product item={item} key={i} />
          );
        })}
      </Grid>
    </>
  );

    </>
    )

}
