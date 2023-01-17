import axios from "axios";

/* Base URL */
const baseURL = "http://localhost:8000/api";

/* Header [x-access-token] */
const instanceAxios = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'x-access-token': localStorage.getItem('token')}
})

export async function GetUsers() {
    try {
        const status = (await (await fetch(`${baseURL}/users`)).json())["hydra:member"];
        return status;
    } catch (error) {
        return "error";
    }
}

