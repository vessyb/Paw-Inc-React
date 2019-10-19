import React from "react";
import TextField from "@material-ui/core/TextField";

function TextInput({ name, handleNameInputChange }) {
  return (
    <TextField
      required
      id="name"
      onChange={handleNameInputChange}
      label="Name"
      value={name}
      fullWidth
    />
  );
}

export default TextInput;
