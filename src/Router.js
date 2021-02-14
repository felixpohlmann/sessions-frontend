import React, { useEffect, useState } from "react";

//components
import { Redirect, Route, Switch } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";

//services
import authService from "./services/auth.service";

//css
import "bootstrap/dist/css/bootstrap.css";
import "./global/global.css";

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await authService.checkAuth();
      setIsAuthenticated(result);
      setIsLoading(false);
    };
    checkAuth();
  });

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        path="/"
        render={() =>
          isAuthenticated ? (
            <App />
          ) : isLoading ? (
            <Loading />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
};

export default Router;
