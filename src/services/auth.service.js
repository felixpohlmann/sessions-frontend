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

export default { login, logout };
