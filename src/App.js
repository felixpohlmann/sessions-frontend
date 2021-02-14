import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//components
import { Button } from "react-bootstrap";

//css
import "./App.css";

//services
import userService from "./services/user.service";
import authService from "./services/auth.service";

const App = () => {
  const [username, setUsername] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getUsername = async () => {
      const username = await userService.getUser();
      setUsername(username);
    };
    getUsername();
  });

  const handleLogout = () => {
    authService.logout();
    history.push("/");
  };

  return (
    <div className="app">
      <h2>Welcome, {username}!</h2>
      <Button style={{ marginLeft: "1rem" }} onClick={handleLogout}>
        Sign out
      </Button>
    </div>
  );
};

export default App;
