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
// import { LandingAlFathCopy } from "./pages/Landing/LandingAlFathCopy.tsx";
import DashboardAdmin from "./pages/AdminMasjid/DashboardAdmin.tsx";
import { ImageGallery } from "./pages/AdminMasjid/ImageGallery.tsx";
import { MasjidMap } from "./pages/AdminMasjid/MasjidMap.tsx";
import LandingHelpdesk from "./pages/Landing/LandingHelpdesk.tsx";

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
        path: "/portofolio-burhan/intpicburhan",
        element: <IntPic />,
      },
      {
        path: "/portofolio-burhan/lpalfath1",
        element: <LandingAlFath />,
      },
      // {
      //   path: "/portofolio-burhan/lpalfathcopy",
      //   element: <LandingAlFathCopy />,
      // },
      {
        path: "/portofolio-burhan/tridialfath1",
        element: <TriDiAlFath />,
      },
      {
        path: "/portofolio-burhan/intpicalfath1",
        element: <IntPicAlFath />,
      },
      {
        path: "/portofolio-burhan/list1",
        element: <List />,
      },
      {
        path: "/portofolio-burhan/checkposi1",
        element: <CheckPosi />,
      },
      {
        path: "/portofolio-burhan/dsadmin1",
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
      {
        path: "/portofolio-burhan/lphelpdesk",
        element: <LandingHelpdesk />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
