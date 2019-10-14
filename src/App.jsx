import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import RouteSwitch from "./routes/RouteSwitch";

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header/>
          <RouteSwitch />
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
