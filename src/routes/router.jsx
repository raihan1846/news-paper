import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import CategoryNews from '../pages/CategoryNews';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: "",
            element: <Home></Home>
        },
        {
            path: "category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch("/news.json")
        }
      ]
    },
    {
        path: "/auth",
        element: <div>Auth Layout</div>,
      },
      {
        path: "/news",
        element: <div>News World</div>,
      },
      {
        path: "/*",
        element: <div>Error</div>,
      },
  ]);

export default router;