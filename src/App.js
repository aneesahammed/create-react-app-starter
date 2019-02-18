import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <h1>app</h1>
            <Switch>
              <Route exact path="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
