import { redirect, useLoaderData, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
      supplier: productData?.supplierId,
      stock: productData?.stock,
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
    await instanceAxios
      .get(`${baseURL}/categories/`)
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


export async function getSuppliers() {
  try {
    let status = {};
    await instanceAxios
      .get(`${baseURL}/suppliers/`)
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



export const loader = async ({ params }) => {
  return (
    await axios.get(`http://127.0.0.1:8000/api/products/${params.id}.json`)
  ).data;
};

export const ProductDetails = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then((res) => setCategories(res.data["hydra:member"]));
  }, []);


  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((res) => setsuppliers(res.data["hydra:member"]));
  }, []);



  const { id } = useParams();

  const [product, setProduct] = useState(useLoaderData());

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
      redirect("/products");
    });
  };
  return (
    <>
      <h1> {product.name}</h1>

      <p>Update Products</p>
      <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form onSubmit={submitForm}>
          
            <TextField  id="outlined-basic" label="Name"
              type="text"
              name="name"
              required
              value={product.name}
              onChange={handleChange}
            />
         
           
            <TextField name="categoryId" defaultValue={product.categoryId.name}   SelectProps={{
            native: true,
          }} select onChange={handleChange}>
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={`/api/categories/${category.id}`}
                >
                  {category.name}
                </option>
              ))}
            </TextField>
        
        
            <TextField  id="outlined-basic" label="reference"
              type="text"
              name="reference"
              value={product.reference}
              onChange={handleChange}
            />
      
               
      <TextField name="supplierId"  defaultValue={product.supplierId.name}   SelectProps={{
            native: true,
          }} select onChange={handleChange}>
              
              {suppliers.map((supplier) => (
                <option
                  key={supplier.id}
                  value={`/api/suppliers/${supplier.id}`}
                >
                  {supplier.name}
                </option>
              ))}
            </TextField>
        
            
            <TextField  id="outlined-basic" label="price"
              type="text"
              name="price"
              defaultValue={product.price}
              onChange={handleChange}
            />
        
            <TextField  id="outlined-basic" label="Stock" type="number" name="stock" onChange={handleChange}   InputLabelProps={{
            shrink: true,
          }}
            defaultValue={product.stock}/>
         
          <button type="submit">Update</button>
        </form>
      </Box>
    </>
  );
};
