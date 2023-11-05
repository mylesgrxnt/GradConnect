// import { useCallback } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home/Home";
import Registration from "./pages/Login_Registration/Registration";
import Navbar from "./components/Navbar";
import Search from "./pages/Search/Search";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import AfterLogin from "./utils/AfterLogin";
import { useAuth0 } from "@auth0/auth0-react";

axios.defaults.baseURL = "http://localhost:3000";

const LayOut = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <header>
        <Navbar />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
      <ToastContainer />
      <Outlet />
      <AfterLogin />
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
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
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
