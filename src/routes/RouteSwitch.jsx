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
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/centers" component={Centers}></Route>
        <Route path="/animals" component={Animals}></Route>
      </Switch>
    </React.Fragment>
  );
}
