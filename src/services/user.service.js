import axios from "axios";

async function getUser() {
  const result = await axios.get("http://localhost:5000/api/user");
  console.log(result.data);
}

const userService = { getUser };

export default userService;
