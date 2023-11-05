import { useAuth0 } from "@auth0/auth0-react";
import "./Loginout.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="logout-btn btn btn-secondary rounded-3"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
