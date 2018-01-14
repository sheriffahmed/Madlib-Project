import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;