// import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";
import Profile from "./pages/Profile/StudentProfile";
import Home from "./pages/Home/Home";
import Registration from "./pages/Login_Registration/Registration";
import Search from "./pages/Search/Search";
axios.defaults.baseURL = "http://localhost:3000";

const LayOut = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
