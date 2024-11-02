import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const App = lazy(() => import("./App"));
const IntPic = lazy(() => import("./pages/IntPic/IntPic"));
const List = lazy(() => import("./pages/List"));
const CheckPosi = lazy(() => import("./pages/IntPic/CheckPosi"));
const TriDiAlFath = lazy(() => import("./pages/TriDiAlFath"));
const IntPicAlFath = lazy(() => import("./pages/IntPic/IntPicAlFath"));
const TriDIPorto = lazy(() => import("./pages/TriDi/TriDIPorto"));
const LandingAlFath = lazy(() => import("./pages/Landing/LandingAlFath"));
const DashboardAdmin = lazy(() => import("./pages/AdminMasjid/DashboardAdmin"));
const ImageGallery = lazy(() => import("./pages/AdminMasjid/ImageGallery"));
const MasjidMap = lazy(() => import("./pages/AdminMasjid/MasjidMap"));
const LandingHelpdesk = lazy(() => import("./pages/Landing/LandingHelpdesk"));
const DashboardCustomer = lazy(
  () => import("./pages/Dashboard/DashboardCustomer")
);

const router = createBrowserRouter([
  {
    path: "/portofolio-burhan/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "tridiporto",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TriDIPorto />
          </Suspense>
        ),
      },
      {
        path: "intpicburhan",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <IntPic />
          </Suspense>
        ),
      },
      {
        path: "lpalfath1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LandingAlFath />
          </Suspense>
        ),
      },
      {
        path: "tridialfath1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TriDiAlFath />
          </Suspense>
        ),
      },
      {
        path: "intpicalfath1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <IntPicAlFath />
          </Suspense>
        ),
      },
      {
        path: "list1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <List />
          </Suspense>
        ),
      },
      {
        path: "checkposi1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CheckPosi />
          </Suspense>
        ),
      },
      {
        path: "dsadmin1",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardAdmin />
          </Suspense>
        ),
      },
      {
        path: "imggallery",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ImageGallery />
          </Suspense>
        ),
      },
      {
        path: "masjidmap",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MasjidMap />
          </Suspense>
        ),
      },
      {
        path: "lphelpdesk",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LandingHelpdesk />
          </Suspense>
        ),
      },
      {
        path: "dbcustomer",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardCustomer />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
