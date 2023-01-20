import { useEffect, useState } from "react";
import { Product } from "../../components/Products/Product";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useLoaderData, useNavigate } from "react-router-dom";


export const Products = () => {
  const { result, pageParam } = useLoaderData();
  const [page, setPage] = useState(pageParam);
  const navigate = useNavigate();




 

  const products = result["hydra:member"];




  useEffect(() => {
    const lastPage = result['hydra:view']['hydra:last'];
    
     // capture du numero de la derniere page
    const re = /\/api\/products\?page=(\d+)/;
    let capture = re.exec(lastPage)
    let max_page = capture[1];
  
    if (page <= 0) {
       setPage(1);
       return;
    } 
    else if (page>max_page) {
      setPage(max_page)
    }
    

    navigate(`/products?page=${page}`);
  }, [page]);

  console.log(products);

  return (
    <>
      <h1> Products </h1>
      {/* <GetProducts /> */}
      <>
      <input placeholder="search" onChange={(e) => searchItems(e.target.value)} / > 
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


      <Button
        variant="contained"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Precedent
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          setPage(parseInt(page) + 1);
        }}
      >
        Suivant
      </Button>
    </>
  );
};
