import React, { Component } from "react";

import Login from "./components/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global/colors.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
