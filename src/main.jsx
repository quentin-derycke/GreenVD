import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from './error-page'

import Root from './routes/Root.jsx'

import Dash from './routes/dashboard/Dash.jsx'

import './index.css'

import {Products} from './routes/products/Products';
import { loader as ProductsLoader} from './components/Api/products/GetProducts'
import {NewProduct} from './routes/products/New';
import { ProductDetails, loader as ProductDetailsLoader } from './routes/products/Product_Detail';

import Categories from './routes/categories/Cat';
import { loader as SubLoader, SubCategories} from './routes/categories/Sub';
import {loader as CategoriesLoader } from './components/Api/categories/GetCategories';

import Users from './routes/users/Users';
import {loader as UsersLoader} from './components/Api/users/GetUsers'
import Order from './routes/orders/order';

import Suppliers from './routes/suppliers/Supp';




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
        loader: ProductsLoader
      },  
      {
        path: "/product/:id",
        element: <ProductDetails/>,
        errorElement: <ErrorPage />,
        loader: ProductDetailsLoader,
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
        loader: CategoriesLoader
                
      },
      {
        path:"categories/:id",
        element: <SubCategories/>,
        errorElement: <ErrorPage />,
        loader: SubLoader,
      },
      {
        path: "users", 
        element:<Users/>,
        errorElement: <ErrorPage />,
        loader: UsersLoader
      },
      {
        path: "orders", 
        element:<Order/>,
        errorElement: <ErrorPage />,
        
      },
      {
        path: "suppliers", 
        element:<Suppliers/>,
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
