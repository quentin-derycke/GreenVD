import React, {useEffect, useState } from "react";
import axios from "axios";










export default function Users() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products").then((data) => {
          console.log(data);
          setproducts(data?.data["hydra:member"]);
        });
      }, []);


    return(
        <>
        <h2> Liste:  </h2>
        
        {products.map((item,i) => {
            return (
                <div key={i}> 
                <p>{item?.name}</p></div>
            );
        })}
  
        </>
        )
}
