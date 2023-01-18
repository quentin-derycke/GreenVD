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
import { ProductDetails, loader as ProductDetailsLoader } from './routes/products/Product_Detail';





const router = createBrowserRouter([

  {
     path: "/", 
    element: <Root />, 
    errorElement: <ErrorPage />,
     children: [
      {
        path: "/dashboard",
        element: <Dash />,
        errorElement: <ErrorPage />,

      }, 
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorPage />,
      },  
      {
        path: "/product/:id",
        element: <ProductDetails/>,
        loader: ProductDetailsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path:"/products/new",
        element: <NewProduct/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "categories",
        element: <Categories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "users", 
        element:<Users/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      }
      
    ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
