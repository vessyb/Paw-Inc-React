import React from "react";
import { Select, MenuItem } from "@material-ui/core";



function CustomSelect({ type, changeHandler, options }) {

  return (
    <Select value={type} onChange={changeHandler}>
      {options ? 
      options.map((opt) => {
        return <MenuItem key={opt.value} value={opt}>{opt.label}</MenuItem>
      } ) 
      : null}
    </Select>
  );
}

export default CustomSelect;
