import { useLoaderData } from "react-router-dom";
import axios from "axios";


export const loader = async ({ params }) => {
    return (await axios.get(`http://127.0.0.1:8000/api/products/${params.id}.json`)).data;
   
}
export const ProductDetails = () => {
     const product = useLoaderData();
     console.log(product);
    return ( <h1> {product.name}</h1>)
}