import React from "react";
import { Select, MenuItem } from "@material-ui/core";



function CustomSelect({ values, changeHandler, options }) {

  return (
    <Select required value={values.type} onChange={changeHandler}>
      {options ? 
      options.map((opt) => {
        return <MenuItem key={opt.value} value={opt}>{opt.label}</MenuItem>
      } ) 
      : null}
    </Select>
  );
}

export default CustomSelect;
