import React, { useState } from "react";
import TextInput from "./formElements/TextInput/TextInput";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormStyles } from "./styles";

function CenterForm({ handleClose }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const classes = FormStyles();

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
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });

    resetState();
    handleClose();
  };

  return (
    <form className={classes.form}>
      <TextInput
        className={classes.formEl}
        handleNameInputChange={handleNameInputChange}
      />
      <Select
        className={classes.formEl}
        id="type"
        value={type}
        displayEmpty={true}
        onChange={handleTypeInputChange}
        fullWidth
      >
        <MenuItem value="cleansing">Cleansing</MenuItem>
        <MenuItem value="adoption">Adoption</MenuItem>>
      </Select>
      <Button
        className={classes.button}
        variant="outlined"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
}

export default CenterForm;
