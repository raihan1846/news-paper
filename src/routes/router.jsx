import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
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