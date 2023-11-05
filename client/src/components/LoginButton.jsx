import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const protectedAPI = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get("/api/user/get", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (res.data.isProfileComplete) {
        navigate("/login");
      } else {
        navigate("/");
      }
      console.log("data here", res.data);
      console.log(res.data.user);
    } catch (error) {
      console.error(error.message || "Login required");
    }
  };

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
