import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

import "./styles.css";

class App extends Component {
  handleClick = () => {
    console.log("discover happened");
  };

  render() {
    return <Card handleClick={this.handleClick} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
