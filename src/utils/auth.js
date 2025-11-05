import Cookies from "js-cookie";

export const login = (data, setAuthenticated, setUserData) => {
  Cookies.set("session_active", "true");
  Cookies.set("user_session", JSON.stringify(data));
  setAuthenticated(true);
  setUserData(data);
};

export const logout = (setAuthenticated) => {
  Cookies.remove("session_active");
  Cookies.remove("user_session");
  setAuthenticated(false);
};
