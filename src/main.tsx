import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { IntPic } from "./pages/IntPic.tsx";

const router = createBrowserRouter([
  {
    path: "/portofolio-burhan/",
    element: <App />,
    children: [
      {
        path: "/portofolio-burhan/",
        element: <Home />,
      },
      {
        path: "/portofolio-burhan/intpic",
        element: <IntPic />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
