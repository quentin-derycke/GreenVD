import axios from "axios";

/* Base URL */
const baseURL = "http://localhost:5000/api";

/* Header [x-access-token] */
const instanceAxios = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'x-access-token': localStorage.getItem('token')}
})

/* Request for Categories */


export async function getCategories() {
    try {
        let status = {};
        await instanceAxios.get(`${baseURL}/categories/`)
            .then(response => {
                status = response;
            }).catch(error => {
                status = error;
            })
        return status;
    } catch (error) {
        return "error";
    }
}