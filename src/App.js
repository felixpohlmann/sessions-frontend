import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./global/colors.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
