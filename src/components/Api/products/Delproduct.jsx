import { redirect } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:8000/api';
export const action = async ({params}) => {
    try {
        console.log(params.id)
        const response = await fetch(`${baseURL}/products/${params.id}`, {
            method: 'DELETE',    
        });
        return  redirect("/products") ;
    } catch (error) {
        console.log(error);
        return  redirect("/products") ;

    }
};