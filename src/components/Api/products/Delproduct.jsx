import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';
export const deleteProduct = async id => {
    try {
        const response = await fetch(`${baseURL}/products/${id}`, {
            method: 'DELETE',
            headers: { 'x-access-token': localStorage.getItem('token') },
        });
        const data = await response.json();
        return { data, status: response.status };
    } catch (error) {
        console.log(error);
        return error;
    }
};