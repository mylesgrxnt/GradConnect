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
import LoggedInHome from "./pages/Home/LoggedInHome";
import Profile from "./pages/Profile/StudentProfile";
import Home from "./pages/Home/Home";
import Registration from "./pages/Login_Registration/Registration";
import Search from "./pages/Search/Search";
import MentorProfile from "./pages/Profile/MentorProfile";
import Registration_Info_Mentor from "./pages/Login_Registration/RegistrationInfoMentor";
import Registration_Info_Student from "./pages/Login_Registration/RegistrationInfoStudent";
import AfterLogin from "./utils/AfterLogin";
import { useAuth0 } from "@auth0/auth0-react";

axios.defaults.baseURL = "http://localhost:3000";

const LayOut = () => {
  return (
    <>
      <div className="top-header">
        <Header />
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
        path: "/landing",
        element: <LoggedInHome />,
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
        path: "/registration_info_mentor",
        element: <Registration_Info_Mentor />,
      },
      {
        path: "/registration_info_student",
        element: <Registration_Info_Student />,
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
