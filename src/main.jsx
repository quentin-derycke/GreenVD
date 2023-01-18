import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './error-page'
import Root from './routes/Root.jsx'
import Dash from './routes/Dash.jsx'
import './index.css'
import Products from './routes/products/Products';
import {NewProduct} from './routes/products/New';
import Categories from './routes/Cat';
import Users from './routes/Users';


import { GetProducts } from './components/Api/products/GetProducts';
import { ProductsDetails } from './routes/products/Products_Details';





const router = createBrowserRouter([

  {
     path: "/", 
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [  
      {
      errorElement: <ErrorPage />,
     children: [
      {
        path: "/dashboard",
        element: <Dash />
      }, 
      {
        path: "/products",
        element: <Products />,
      
      },  
      {
        path: "/products/:id",
        element: <ProductsDetails/>
      },
      {
        path:"/products/new",
        element: <NewProduct/>
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "users", 
        element:<Users/>
      }
      
    ],
  }
     ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
