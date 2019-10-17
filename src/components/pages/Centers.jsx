import React, { useEffect, useState } from "react";
import CenterForm from "../forms/CenterForm";
import axios from "axios";
import CentersTable from "../tables/CentersTable";
import CustomDialog from "../Dialog/CustomDialog";
import { Button } from "@material-ui/core";
import { BodyStyles } from "./styles";

const headCells = [
  { id: "name", disablePadding: true, label: "Name" },
  { id: "type", disablePadding: true, label: "Type" }
];

export default function Centers() {
  const [centers, setCenters] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = BodyStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/centers").then(response => {
      setCenters(response.data);
      console.log(centers);
    });
  }, []);

  return (
    <div className={classes.mainElements}>
      <CentersTable centers={centers} headCells={headCells} />
      <CustomDialog open={open} handleClose={handleClose}>
        <CenterForm />
      </CustomDialog>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Register
      </Button>
    </div>
  );
}
