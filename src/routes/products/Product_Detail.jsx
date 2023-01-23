import { redirect, useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";
/* Base URL */
const baseURL = `http://127.0.0.1:8000/api`;

/* Header [x-access-token] */
const instanceAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { "x-access-token": localStorage.getItem("token") },
});


export async function updateProduct(productId, productData) {
  try {
    let status = {};
    const axiosData = {
      name: productData?.name,
      categoryId: productData?.categoryId,
      reference: productData?.reference,
      price: productData?.price,
    };

    await instanceAxios
      .put(`${baseURL}/products/${productId}`, axiosData)
      .then((response) => {
        status = response;
      })
      .catch((error) => {
        status = error;
      });
    return status;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategory() {
    try {
        let status = {};
        await instanceAxios.get(`${baseURL}/categories/`)
            .then(response => {
                status = response;
            }).catch(error => {
                status = error;
            });
        return status;
    } catch (error) {
        console.log(error);
    }
}
export const loader = async ({ params }) => {
    return (await axios.get(`http://127.0.0.1:8000/api/products/${params.id}.json`)).data;

}



export const ProductDetails = () => {
     
      const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategory()
            .then(res => setCategories(res.data["hydra:member"]))
    }, [])

const {id} = useParams();

    const[ product, setProduct] = useState(useLoaderData());

    

  const handleChange = (e) => {
    e.preventDefault();

    setProduct({
      ...product, 
      [e.target.name]: e.target.value,
    });

  };


const submitForm = (e) => {
    e.preventDefault();

    console.log("----------------------------------------");
    console.log(product);
    console.log("----------------------------------------");

    updateProduct(id, product).then((res) => {
        
      console.log(res);
      console.log(res.data);
      redirect('/products')
    });
   
  };
    return ( 
    <>
    <h1> {product.name}</h1>
    

      <p>Update Products</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            Product Name:
            <input type="text" name="name" value={product.name} onChange={handleChange} />
          </label>
          <label>
            Product category_id:
            <select name="categoryId" onChange={handleChange}>
                            <option value="">Select a category</option>
                            {categories.map(category => <option key={category.id} value={`/api/categories/${category.id}}`}>{category.name}</option>)}
                        </select>
                    </label>
          <label>
            Product reference:
            <input type="text" name="reference" value={product.reference} onChange={handleChange} />
          </label>
          <label>
            Product price:
            <input type="text" name="price" value={product.price} onChange={handleChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>

    </>);
}
