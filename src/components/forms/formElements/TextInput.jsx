import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextInput({ name, handleChange }) {
  // const [values, setValues] = React.useState({
  //   name: ""
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  console.log(handleChange)
  return (
    <TextField
      onChange={handleChange}
      label="Name"
      defaultValue={name}
    />
  );
}
