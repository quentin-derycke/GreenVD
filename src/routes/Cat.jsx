import React, { useEffect, useState } from "react";

import axios from "axios";

/* Base URL */
const baseURL = "http://127.0.0.1:8000/api";

/* Header [x-access-token] */
const instanceAxios = axios.create({
    baseURL: baseURL,
    timeout: 1000,

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




export default function Categories() {
   const [categories, setCategories] = useState([]);


   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getCategories();
            setCategories(response.data["hydra:member"]);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, []);


const parentCategories = categories.filter(category => category.parent && category.parent.length > 0);

    return( 
        <>
     <h1> Categories </h1>

     <div>
        {console.log(parentCategories)}
        <div>
            {parentCategories.map(category => (
                <div key={category["@id"]}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    
                </div>
            ))}
        </div>
    
 </div>

 </>
    )
}
