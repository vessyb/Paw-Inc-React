import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/pages/About";
import Centers from "../components/pages/Centers";
import Animals from "../components/pages/Animals";
import Home from "../components/pages/Home";

export default function RouteSwitch() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/centers" component={Centers}></Route>
        <Route exact path="/animals" component={Animals}></Route>
      </Switch>
    </React.Fragment>
  );
}
