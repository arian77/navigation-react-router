import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const Links = () => (
  <nav>
    <Link className="h" to="/">
      Home{" "}
    </Link>
    <Link className="p" to={{ pathname: "/portofolio" }}>
      Portofolio
    </Link>
    <Link className="c" replace to="/contact">
      Contact
    </Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home </h1>} />
      <Route path="/portofolio" render={() => <h1>Portofolio </h1>} />
      <Route path="/contact" render={() => <h1> Contact </h1>} />
    </div>
  </Router>
);

export default App;
