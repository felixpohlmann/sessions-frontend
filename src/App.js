import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//services
import authService from "./services/auth.service";

//components
//import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./global/colors.css";
import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  async componentDidMount() {
    const checkAuth = await authService.checkAuth();
    this.setState({ isAuthenticated: checkAuth });
    console.log("Authenticated: ", checkAuth);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
