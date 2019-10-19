import React, { useState } from "react";
import TextInput from "./formElements/TextInput/TextInput";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormStyles } from "./styles";

function CenterForm({
  type,
  handleNameInputChange,
  handleTypeInputChange,
  handleSubmit
}) {
  const classes = FormStyles();

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
