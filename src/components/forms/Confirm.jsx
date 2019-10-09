import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import {List, ListItemText} from "@material-ui/core";
import CustomButton from "./formElements/CustomButton";

export class Confirm extends Component {
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
    const {
      values: { name, type }
    } = this.props;
    return (
        <React.Fragment>
          <AppBar title="Confirm Center Data"></AppBar>
          <List>
            <ListItemText primary="Name" secondary={name}></ListItemText>
          </List>
          <CustomButton buttonName="Confirm & Continue" direction={this.continue} />
          <CustomButton buttonName="Go back" direction={this.back} />
        </React.Fragment>
    );
  }
}

export default Confirm;
