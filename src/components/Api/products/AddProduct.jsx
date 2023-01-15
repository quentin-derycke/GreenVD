import React, {useEffect, useState } from "react";
import axios from "axios";


/* Base URL */
const baseURL = `http://127.0.0.1:8000/api`;

/* Header [x-access-token] */
const instanceAxios = axios.create({
baseURL: baseURL,
timeout: 1000,
headers: {'x-access-token': localStorage.getItem('token')}
})

/* Request for Products */

export async function createProduct(productData) {
try{
let status = {};
const axiosData = {
"name": productData?.name,
"category_id_id": productData?.categoryId,
"reference": productData?.reference,
"price": productData?.price,
};
await instanceAxios.post(`${baseURL}/products/`, axiosData)
.then(response => {
status = response;
}).catch(error => {
status = error;
})
return status;
} catch (error) {
console.log(error);
}
}

export default function AddProduct() {

const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    reference: "",
    price: ""
});

const handleChange = (e) => {
    e.preventDefault();

    setProduct({
        ...product, [e.target.name]: e.target.value
    });
};

const submitForm = (e) => { e.preventDefault();

createProduct(product)
.then((res) =>  {
    console.log(res);
    console.log(res.data);
});
};

return (
<div>
<p>Add Products</p>
<div>
<form onSubmit={submitForm}>
<label>
Product Name:
<input type="text" name="name" onChange={handleChange} />
</label>
<label>
Product category_id:
<input type="number" name="categoryId" onChange={handleChange} />
</label>
<label>
Product reference:
<input type="text" name="reference" onChange={handleChange} />
</label>
<label>
Product price:
<input type="text" name="price" onChange={handleChange} />
</label>
<button type="submit">Add</button>
</form>
</div>
</div>
);

}




