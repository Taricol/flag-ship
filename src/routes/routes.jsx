import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <p>Loading, Please wait .......</p>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails />,
        hydrateFallbackElement: <p>Loading, Please wait .......</p>,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);

export default router;
