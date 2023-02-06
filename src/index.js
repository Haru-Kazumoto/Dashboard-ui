import React from "react";
import { createRoot } from "react-dom/client";
import {Outlet,createBrowserRouter,RouterProvider} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {Dashboard, Comment, Analytics, User, Product, About} from './pages/index';
import "./App.css";
import Header from "./components/Header/Header";

const AppLayout = () => (
  <>
    <Header />
    <Sidebar />
    <Outlet /> 
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/user",
        element: <User />
      }
      ,{
        path: '/analytics',
        element: <Analytics />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/comment',
        element: <Comment />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);