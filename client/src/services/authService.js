/* eslint-disable import/no-anonymous-default-export */
import jwtDecode from "jwt-decode";
import  axios  from 'axios';
const apiEndpoint = "https://sophie21.herokuapp.com/api/auth";
const tokenKey = "accessToken";

// http.setJwt(getJwt());

export async function login(email, password) {
  try {
    const response = await axios.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, response.data.accessToken);
  } catch (err) {
    alert('User Not Found', err);
    console.error('Error loggin in',err);
  }
  return true;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    // getJwt
  };

