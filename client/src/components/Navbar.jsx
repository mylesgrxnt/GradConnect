import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginButton from "./LoginButton";

const Navbar = () => {
  // const handleLogin = async () => {
  //   console.log("in");
  // };
  // const handleLogout = async () => {
  //   console.log("out");
  // };
  return (
    <div className="nav-bar">
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-title">
              <span>GradNet</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-login">
        {/* <ul>
          {currentUser ? (
            <li>
              <button>Log Out</button>
            </li>
          ) : (
            <>
              <li>
                <button>Log in</button>
              </li>
              <li>
                <Link to="/register">
                  <button>Sign Up</button>
                </Link>
              </li>
            </>
          )}
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
