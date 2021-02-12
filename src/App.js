import React, { useEffect, useState } from "react";

//css
import "./App.css";

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

  return (
    <div className="app">
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default App;
