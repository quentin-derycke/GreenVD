import axios from "axios";



export const loader = async ({ request }) => {
 const url = new URL(request.url);
 let pageParam = url.searchParams.get("page") || 1;

 console.log(pageParam);

  const result = (await axios.get(`http://127.0.0.1:8000/api/products?page=${pageParam}`)).data;

  return { result, pageParam };
}
