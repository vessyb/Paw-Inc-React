import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button
} from "@material-ui/core";

function CustomDialog({ children, onDialogOpen = () => {} }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    onDialogOpen();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog PaperProps={dialogStyle} open={open} onClose={handleClose}>
          <DialogContent>{children}</DialogContent>    
      </Dialog>
    </React.Fragment>
  );
}

const dialogStyle = {
  margin: "20% auto",
  padding: "20px",
  width: "70%"
};

export default CustomDialog;
