import axios from "axios";



export const loader = async () => {
  return (await axios.get("http://127.0.0.1:8000/api/products.json")).data;
  
}


