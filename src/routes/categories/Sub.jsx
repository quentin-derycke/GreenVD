
import { CardMedia } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import axios from "axios";






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

<div>{categories.parent.map(sousCat =>
    
(
    
<h2>{sousCat.name}</h2>
))}</div>
 

 </>
 
    )
}
