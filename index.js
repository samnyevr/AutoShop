import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App.js";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));