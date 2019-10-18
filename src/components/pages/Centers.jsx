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
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const classes = BodyStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameInputChange = e => {
    setName(e.target.value);
  };

  const handleTypeInputChange = e => {
    setType(e.target.value);
  };

  const resetState = () => {
    setName("");
    setType("");
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/centers",
        {
          name,
          type
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res);
        setCenters([...centers, res.data])
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });

    resetState();
    handleClose();
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
        <CenterForm
          handleNameInputChange={handleNameInputChange}
          handleTypeInputChange={handleTypeInputChange}
          handleSubmit={handleSubmit}
          type={type}
        />
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
