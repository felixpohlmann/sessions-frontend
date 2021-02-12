import axios from "axios";

async function getUser() {
  const result = await axios.get("http://localhost:5000/api/user");
  return result.data.username;
}

const userService = { getUser };

export default userService;
