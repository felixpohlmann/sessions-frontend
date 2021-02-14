import axios from "axios";

axios.defaults.withCredentials = true;

async function login(username, password) {
  const response = await axios.post(
    "http://localhost:5000/api/auth/signin",

    {
      username,
      password,
    }
  );
  console.log("Login-Response: ", response);
}

async function logout() {
  const response = await axios.delete("http://localhost:5000/api/auth/signout");
  console.log("Logout-Response: ", response);
}

async function checkAuth() {
  const response = await axios.get("http://localhost:5000/api/auth/");
  //check if response contains user id, if true, user is logged in / has valid session
  if (response.data.userId) {
    return true;
  } else {
    return false;
  }
}

const authService = { login, logout, checkAuth };

export default authService;
