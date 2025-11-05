import Cookies from "js-cookie";

export const login = (data, setAuthenticated) => {
  localStorage.setItem("user_session", JSON.stringify(data));
  Cookies.set("session_active", "true");
  setAuthenticated(true);
};

export const logout = (setAuthenticated) => {
  localStorage.removeItem("user_session");
  Cookies.remove("session_active");
  setAuthenticated(false);
};
