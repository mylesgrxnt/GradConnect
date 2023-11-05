import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const AfterLogin = () => {
  const navigate = useNavigate();
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const protectedAPI = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.get("/api/user/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.data.isProfileComplete) {
          navigate("/registration_info_student");
        } else if (res.data.isProfileComplete) {
          navigate("/landing");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error(error.message || "Login required");
      }
    };

    if (isAuthenticated && !isLoading) {
      protectedAPI();
    }
  }, [isAuthenticated, isLoading, getAccessTokenSilently, navigate]);

  return null;
};

export default AfterLogin;
