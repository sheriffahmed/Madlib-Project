import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Madlib from "./madlib/madlib";
import Inputlib from "./madlib/inputlib";


const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}

      <Link to="/madlib">Generate Madlib</Link>
      {"  "}
      <Link to="/input"> Input Words</Link>
      {"  "}

    </nav>

    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/madlib" component={Madlib} />
      <Route path="/input" component={Inputlib} />

    </Switch>
  </div>
);

export default App;