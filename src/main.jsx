import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";

import Root from "./routes/Root.jsx";

import Dash from "./routes/dashboard/Dash.jsx";
import { loader as SalesLoader } from "./components/Api/charts/sales"
import "./index.css";

import { Products } from "./routes/products/Products";
import { loader as ProductsLoader } from "./components/Api/products/GetProducts";
import { NewProduct } from "./routes/products/New";
import {
  ProductDetails,
  loader as ProductDetailsLoader,
} from "./routes/products/Product_Detail";
import { action as deleteProductAction } from "./components/Api/products/Delproduct";
import Categories from "./routes/categories/Cat";
import { loader as SubLoader, SubCategories } from "./routes/categories/Sub";
import { loader as CategoriesLoader } from "./components/Api/categories/GetCategories";

import Users from "./routes/users/Users";
import { loader as UsersLoader } from "./components/Api/users/GetUsers";
import Order from "./routes/orders/Order";
import { loader as OrderLoader } from "./components/Api/orders/orders";
import Suppliers from "./routes/suppliers/Supp";
import { loader as SuppliersLoader } from "./components/Api/suppliers/suppliers";
import Workers from "./routes/employe/Workers";
import Addresses from "./routes/addresses/Addresses";
import { loader as AddressLoader } from "./components/Api/addresses/addresses";

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
        loader: SalesLoader
            },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorPage />,
        loader: ProductsLoader,
      },
      {
        path: "/products/:id/delete",
        action: deleteProductAction ,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        errorElement: <ErrorPage />,
        loader: ProductDetailsLoader,
      },

      {
        path: "/products/new",
        element: <NewProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "categories",
        element: <Categories />,
        errorElement: <ErrorPage />,
        loader: CategoriesLoader,
      },
      {
        path: "categories/:id",
        element: <SubCategories />,
        errorElement: <ErrorPage />,
        loader: SubLoader,
      },
      {
        path: "users",
        element: <Users />,
        errorElement: <ErrorPage />,
        loader: UsersLoader,
      },
      {
        path: "orders",
        element: <Order />,
        errorElement: <ErrorPage />,
        loader: OrderLoader,
      },

      {
        path: "/suppliers",
        element: <Suppliers />,
        errorElement: <ErrorPage />,
        loader: SuppliersLoader,
      },
      {
        path: "/workers",
        element: <Workers />,
        errorElement: <ErrorPage />,
      },

      {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/addresses",
        element: <Addresses />,
        loader: AddressLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
