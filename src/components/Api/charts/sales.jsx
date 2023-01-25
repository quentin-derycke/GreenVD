
/* Base URL */
const baseURL = "http://localhost:8000/api";


export async function loader() {
    try {
        return  (await fetch(`${baseURL}/RevenueByYear/2023`));
        
    } catch (error) {
        return "error";
    }
}
