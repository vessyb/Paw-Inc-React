import React, { Component } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Portal from "./components/Portal/Portal";
import Toggle from "./components/Toggle";
import CenterForm from "./components/forms/CenterForm";

import "./App.css";
import RouteSwitch from "./routes/RouteSwitch";
import CustomSelect from "./components/forms/formElements/CustomSelect";

const options = [
  {value: "chocolate", label: "chocolate"}
];

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedOption: null,
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () =>console.log("Option selected: ", this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Router>
            <Header />
            <RouteSwitch />
          </Router>
          <CenterForm />
          <Footer />
        </div>
        
        {/* TODO: this portal needs to be placed in the button that's going to show me the form*/}
        {/* <Toggle>
          <Portal>
            <h1>Hi, I'm Portal</h1>
          </Portal>
        </Toggle> */}
      </div>
    );
  }
}

export default App;