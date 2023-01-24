
/* Base URL */
const baseURL = "http://localhost:8000/api";


export async function loader() {
    try {
        return (await (await fetch(`${baseURL}/orders`)).json())["hydra:member"];
        
    } catch (error) {
        return "error";
    }
}

