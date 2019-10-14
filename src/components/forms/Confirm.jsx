import React from "react";
import { List, ListItemText } from "@material-ui/core";
import CustomDialog from "../Dialog/CustomDialog";

function Confirm(props) {

  const {
    values: { name, type }
  } = props;
  return (
    <React.Fragment>
        <CustomDialog>
          <List>
            <ListItemText primary="Name" secondary={name}></ListItemText>
            <ListItemText primary="Type" secondary={type.value}></ListItemText>
          </List>
      </CustomDialog>
    </React.Fragment>
  );
}

export default Confirm;
