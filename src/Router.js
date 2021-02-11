import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//components
import App from "./App";
import Login from "./components/Login/Login";

//services
import authService from "./services/auth.service";

// (global) css
import "bootstrap/dist/css/bootstrap.min.css";
import "./global/global.css";

class Router extends Component {
  state = { authStatus: false };

  async componentDidMount() {
    const authStatus = await authService.checkAuth();
    this.setState({ authStatus });
    console.log("authState: ", authStatus);
  }

  render() {
    const { authStatus } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (authStatus ? <App /> : <Login />)}
          />
          <Route
            path="/login"
            render={() => (authStatus ? <App /> : <Login />)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
