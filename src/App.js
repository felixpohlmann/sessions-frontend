import React, { useEffect, useState } from "react";

//services
import userService from "./services/user.service";

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      const username = await userService.getUser();
      setUsername(username);
    };
    getUsername();
  });

  return <p>Welcome {username}!</p>;
};

export default App;
