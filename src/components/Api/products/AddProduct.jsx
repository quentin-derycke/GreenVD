import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

/* Base URL */
const baseURL = `http://127.0.0.1:8000/api`;

/* Header [x-access-token] */
const instanceAxios = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { "x-access-token": localStorage.getItem("token") },
});

/* Request for Products */

export async function createProduct(productData) {
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
    console.log(axiosData);

    await instanceAxios
      .post(`${baseURL}/products`, axiosData)
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

export default function AddProduct() {
 
 
 
 
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [reference, setReference] = useState("");
  const [price, setPrice] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [stock, setStock] = useState(0);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then((res) => setCategories(res.data["hydra:member"]));
  }, []);

  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {
    getSuppliers().then((res) => setsuppliers(res.data["hydra:member"]));
  }, []);

  const handleChange = (e, setState) => {
    e.preventDefault();

    setState(e.target.value);

    /*   [e.target.name]: e.target.value, */
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log("----------------------------------------");

    console.log("----------------------------------------");

    createProduct({
      name: name,
      categoryId: categoryId,
      reference: reference,
      price: price,
      supplierId: supplierId,
      stock: Number(stock),
    }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <p>Add Products</p>
      <div>
        <form onSubmit={submitForm}>
          <TextField
            type="text"
            name="name"
            required
            label="Name"
            value={name}
            onChange={(event) => handleChange(event, setName)}
          />

          <TextField
            name="categoryId"
            value={categoryId}
            label="Category"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue="select une category"
            SelectProps={{
              native: true,
            }}
            select
            onChange={(event) => handleChange(event, setCategoryId)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option
                key={category.id}
                value={`/api/categories/${category.id}`}
              >
                {category.name}
              </option>
            ))}
          </TextField>

          <TextField
            type="text"
            label="Reference"
            required
            name="reference"
            value={reference}
            onChange={(event) => handleChange(event, setReference)}
          />

          <TextField
            type="text"
            label="Price"
            required
            name="price"
            value={price}
            onChange={(event) => handleChange(event, setPrice)}
          />

          <TextField
            type="number"
            name="stock"
            label="Stock"
            required
            value={stock}
            onChange={(event) => handleChange(event, setStock)}
          />
          <TextField
            name="supplierId"
            value={supplierId}
            label="Supplier"
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            select
            onChange={(event) => handleChange(event, setSupplierId)}
          >
            <option value="">Select a supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={`/api/suppliers/${supplier.id}`}>
                {supplier.name}
              </option>
            ))}
          </TextField>

          <button type="submit">Add</button>
        </form>
      </div>
    </Box>
  );
}
