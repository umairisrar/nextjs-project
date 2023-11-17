import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("albawardy_token");
  console.log(token);
  if (token) {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded;
  }
  return null;
};

export const isTokenExpired = () => {
  const token = localStorage.getItem("albawardy_token");

  if (token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};
