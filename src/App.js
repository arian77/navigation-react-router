import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <h1>Home </h1>} />
      <Route path="/portofolio" render={() => <h1>About </h1>} />
      <Route path="/contact" render={() => <h1> Contact </h1>} />
    </div>
  </Router>
);

export default App;
