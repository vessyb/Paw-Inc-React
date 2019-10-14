import React from "react";
import TextField from "@material-ui/core/TextField";

function TextInput({ name, changeHandler }) {

  console.log(changeHandler)
  return (
    <TextField
      required
      onChange={changeHandler}
      label="Name"
      defaultValue={name}
    />
  );
}

export default TextInput;
