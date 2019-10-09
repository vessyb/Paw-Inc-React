import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // process form // send the data to the api (backend)
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"></AppBar>
          <h1>Thank you for your submission</h1>
          <h1>You will get an email with further instructions.</h1>
          {/* <TextInput /> */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;