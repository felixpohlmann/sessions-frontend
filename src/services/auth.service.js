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
  const response = await axios.get("http://localhost:5000/api/auth/signout");
  console.log("Logout-Response: ", response);
}

async function checkAuth() {
  const response = await axios.get("http://localhost:5000/api/auth/checkauth");
  if (response.data.auth) {
    return true;
  } else {
    return false;
  }
}

export default { login, logout, checkAuth };
