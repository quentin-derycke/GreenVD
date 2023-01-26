
/* Base URL */
const baseURL = "http://localhost:8000/api";


export async function loader(par) {

    console.log(par)
    try {
        return  (await fetch(`${baseURL}/RevenueByYear/2023`));
        
    } catch (error) {
        return "error";
    }
}
