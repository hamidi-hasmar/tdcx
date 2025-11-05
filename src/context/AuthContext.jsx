import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    !!Cookies.get("session_active")
  );
  const [userData, setUserData] = useState(Cookies.get("user_session"));

  useEffect(() => {
    const handleStorage = () =>
      setAuthenticated(!!Cookies.get("session_active"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
