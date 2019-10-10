import React from "react";
import AppBar from "@material-ui/core/AppBar";


function Success(props) {

  const forward = e => {
    e.preventDefault();
    // process form // send the data to the api (backend)
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

    return (
        <React.Fragment>
          <AppBar title="Success"></AppBar>
          <h1>Thank you for your submission</h1>
          <h1>You will get an email with further instructions.</h1>
        </React.Fragment>
    );
}

export default Success;