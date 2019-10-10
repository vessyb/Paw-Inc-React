import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {List, ListItemText} from "@material-ui/core";
import CustomButton from "./formElements/CustomButton";

function Confirm(props) {

  const forward = (e) => {
    e.preventDefault();
    // process form // send the data to the api (backend)
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

    const {
      values: { name, type }
    } = props;
    return (
        <React.Fragment>
          <AppBar title="Confirm Center Data"></AppBar>
          <List>
            <ListItemText primary="Name" secondary={name}></ListItemText>
            <ListItemText primary="Type" secondary={type.value}></ListItemText>
          </List>
          <CustomButton buttonName="Confirm & Continue" direction={forward} />
          <CustomButton buttonName="Go back" direction={back} />
        </React.Fragment>
    );
}

export default Confirm;
