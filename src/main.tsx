import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IntPic } from "./pages/IntPic/IntPic.tsx";
import { List } from "./pages/List.tsx";
import { CheckPosi } from "./pages/IntPic/CheckPosi.tsx";
import { TriDiAlFath } from "./pages/TriDiAlFath.tsx";
import { IntPicAlFath } from "./pages/IntPic/IntPicAlFath.tsx";
import { TriDIPorto } from "./pages/TriDi/TriDIPorto.tsx";
import { LandingAlFath } from "./pages/Landing/LandingAlFath.tsx";
import DashboardAdmin from "./pages/AdminMasjid/DashboardAdmin.tsx";
import { ImageGallery } from "./pages/AdminMasjid/ImageGallery.tsx";
import { MasjidMap } from "./pages/AdminMasjid/MasjidMap.tsx";

const router = createBrowserRouter([
  {
    path: "/portofolio-burhan/",
    element: <App />,
    children: [
      {
        path: "/portofolio-burhan/tridiporto",
        element: <TriDIPorto />,
      },
      {
        path: "/portofolio-burhan/",
        element: <IntPic />,
      },
      {
        path: "/portofolio-burhan/lpalfath",
        element: <LandingAlFath />,
      },
      {
        path: "/portofolio-burhan/tridialfath",
        element: <TriDiAlFath />,
      },
      {
        path: "/portofolio-burhan/intpicalfath",
        element: <IntPicAlFath />,
      },
      {
        path: "/portofolio-burhan/list",
        element: <List />,
      },
      {
        path: "/portofolio-burhan/checkposi",
        element: <CheckPosi />,
      },
      {
        path: "/portofolio-burhan/dsadmin",
        element: <DashboardAdmin />,
      },
      {
        path: "/portofolio-burhan/imggallery",
        element: <ImageGallery />,
      },
      {
        path: "/portofolio-burhan/masjidmap",
        element: <MasjidMap />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
