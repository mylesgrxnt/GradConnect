// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";

const LayOut = () => {
  return <header></header>;
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
    ],
  },
]);

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
