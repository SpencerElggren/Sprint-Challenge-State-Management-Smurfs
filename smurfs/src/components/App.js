import React, { Component } from "react";
import "./App.css";
import SmurfList from "./smurfList";
import Smurff from "./smurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurff/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
