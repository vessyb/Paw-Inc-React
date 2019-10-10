import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CustomButton from "./formElements/CustomButton";
import TextInput from "./formElements/TextInput";
import CustomSelect from "./formElements/CustomSelect";

const options = [
    {value: "cleansing", label: "cleansing"},
    {value: "adoption", label: "adoption"}
  ]

function FormCenterDetails({changeHandler, nextStep, type}) {

  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <React.Fragment>
      <AppBar title="Enter Center Details"></AppBar>
      <TextInput changeHandler={changeHandler('name')} />
      <CustomSelect type={type} options={options} changeHandler={changeHandler('type')} />
      <CustomButton direction={forward} buttonName={"Continue"} />
    </React.Fragment>
  );
}

export default FormCenterDetails;
