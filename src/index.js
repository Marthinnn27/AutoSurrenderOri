import React from "react"
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from "../src/pages/mainpage"
import ToursPage from "../src/pages/tourspage"
import AboutUs from "../src/pages/aboutuspage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/tourspage",
    element: <ToursPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);