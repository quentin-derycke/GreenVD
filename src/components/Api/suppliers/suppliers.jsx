import axios from "axios";

/* Base URL */
const baseURL = "http://localhost:8000/api";

/* Header [x-access-token] */
const instanceAxios = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'x-access-token': localStorage.getItem('token')}
})

export async function loader() {
    try {
        return (await (await fetch(`${baseURL}/suppliers`)).json())["hydra:member"];
        
    } catch (error) {
        return "error";
    }
}

