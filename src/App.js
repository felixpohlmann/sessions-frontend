import React, { Component } from "react";

import Login from "./components/Login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global/colors.css";
import "./App.css";

class App extends Component {
  state = { token: "" };

  handleTokenSet = (token) => {
    this.setState({ token });
  };

  render() {
    const { handleTokenSet } = this;
    return (
      <div className="app">
        <Login onTokenSet={handleTokenSet} />
      </div>
    );
  }
}

export default App;
