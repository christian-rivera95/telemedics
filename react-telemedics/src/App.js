import React from "react";
import "./App.css";
import Login from "./login";
import Dashboard from "./dashboard";
import CheckOut from "./checkout";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const App = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        isAuthenticated={true}
      />
      <PrivateRoute
        path="/checkout"
        component={CheckOut}
        isAuthenticated={true}
      />
    </Switch>
  </Router>
);

export default App;
