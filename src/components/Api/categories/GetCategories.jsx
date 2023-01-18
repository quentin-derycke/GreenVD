import axios from "axios";

/* Base URL */
const baseURL = "http://localhost:5000/api";


/* Request for Categories */

export const loader = async () => {
    return (await axios.get("http://127.0.0.1:8000/api/categories.json")).data;
    
  }

  
