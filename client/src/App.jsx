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
import Header from "./pages/Header/Header";
import Profile from "./pages/Profile/StudentProfile";
import Home from "./pages/Home/Home";
import Registration from "./pages/Login_Registration/Registration";
import Search from "./pages/Search/Search";
import MentorProfile from "./pages/Profile/MentorProfile";
import Registration_Info from "./pages/Login_Registration/RegistrationInfo";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import AfterLogin from "./utils/AfterLogin";
import { useAuth0 } from "@auth0/auth0-react";

axios.defaults.baseURL = "http://localhost:3000";

const LayOut = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className="top-header">
        <header>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</header>
      </div>
      <ToastContainer />
      <Outlet />
      <AfterLogin />
    </>
  );
};

const router = createBrowserRouter([
  {
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
      {
        path: "/mentorProfile",
        element: <MentorProfile />,
      },
      {
        path: "/registration_info",
        element: <Registration_Info />,
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
