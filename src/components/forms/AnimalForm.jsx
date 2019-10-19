import React, { useState } from "react";
import TextInput from "./formElements/TextInput/TextInput";
import Button from "@material-ui/core/Button";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { FormStyles } from "./styles";

function AnimalForm({
  cleansingCenters,
  handleNameInputChange,
  handleTypeInputChange,
  handleCenterNameInputChange,
  handleSubmit,
  type,
  centerName
}) {
  const classes = FormStyles();

  return (
    <form className={classes.form}>
      <TextInput
        className={classes.formEl}
        handleNameInputChange={handleNameInputChange}
      />
      <Select
        id="type"
        value={type}
        displayEmpty={true}
        onChange={handleTypeInputChange}
        fullWidth
        className={classes.formEl}
      >
        <MenuItem value="dog">Dog</MenuItem>
        <MenuItem value="cat">Cat</MenuItem>
      </Select>
      <Select
        id="centerName"
        value={centerName}
        displayEmpty={true}
        onChange={handleCenterNameInputChange}
        fullWidth
        className={classes.formEl}
      >
        {cleansingCenters.map(center => (
          <MenuItem key={center.name} value={center.name}>
            {center.name}
          </MenuItem>
        ))}
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

export default AnimalForm;
