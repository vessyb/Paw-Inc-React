import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextInput({ name, changeHandler }) {
  // const [values, setValues] = React.useState({
  //   name: ""
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  console.log(changeHandler)
  return (
    <TextField
      onChange={changeHandler}
      label="Name"
      defaultValue={name}
    />
  );
}
