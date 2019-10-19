import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import { DialogStyles } from "./styles";

function CustomDialog({ children, open, handleClose }) {
  const classes = DialogStyles();

  return (
    <React.Fragment>
      <Dialog className={classes.dialog} open={open} onClose={handleClose}>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default CustomDialog;
