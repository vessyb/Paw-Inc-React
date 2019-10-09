import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CustomButton from "./formElements/CustomButton";
import TextInput from "./formElements/TextInput";
import CustomSelect from "./formElements/CustomSelect";



const options = [
    {value: "1", label: "dog"},
    {value: "2", label: "cat"}
  ]

function FormCenterDetails(props) {

  const [form, setFormValue] = useState({name: '', type: {}, step: 1});

  const forward = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };
  
  const changeHandler = (fieldName) => (e) => {
    const fieldState = {};
    fieldState[fieldName] = e.target.value;
    setFormValue({
            ...form,
            ...fieldState
            }
        );
        console.log('state', form);
  }

  const { values, handleChange } = props;

  return (
    <React.Fragment>
      <AppBar title="Enter Center Details"></AppBar>
      <TextInput handleChange={changeHandler('name')} />
      <CustomSelect options={options} handleChange={changeHandler('type')} />
      <CustomButton direction={forward} buttonName={"Continue"} />
    </React.Fragment>
  );
}

export default FormCenterDetails;
