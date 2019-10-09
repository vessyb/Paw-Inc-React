import React from "react";
// import Select from "react-select";
import { Select, MenuItem } from "@material-ui/core";



function CustomSelect({ type, handleChange, options }) {

  return (
    <Select value={type} onChange={handleChange}>
      {options ? 
      options.map((opt) => {
        return <MenuItem key={opt.value} value={opt}>{opt.label}</MenuItem>
      } ) 
      : null}
    </Select>
  );
}

export default CustomSelect;
