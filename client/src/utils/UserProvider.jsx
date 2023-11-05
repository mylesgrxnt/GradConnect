import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

// eslint-disable-next-line
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get("/api/auth/me");
        if (user.data.authStatus) {
          setCurrentUser(user.data.userInfo);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        setCurrentUser(null);
        console.error("User auth fetching error", error);
      }
    };

    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
