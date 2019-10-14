import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Dialog, DialogContent } from "@material-ui/core";
import CustomDialog from "../Dialog/CustomDialog";

function Success() {
  return (
    <React.Fragment>
      {/* <Dialog open="open">
        <DialogContent> */}
      <CustomDialog>
        <h1>Thank you for your submission</h1>
        <h1>You will get an email with further instructions.</h1>
        {/* </DialogContent>
      </Dialog> */}
      </CustomDialog>
    </React.Fragment>
  );
}

export default Success;
