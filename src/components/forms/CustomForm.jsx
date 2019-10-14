import React, { useState } from "react";
import FormDetails from "./FormDetails";

function CustomForm({ sectionType }) {
  const [form, setFormValue] = useState({ name: "", type: {} });

  const changeHandler = fieldName => e => {
    const fieldState = {};
    fieldState[fieldName] = e.target.value;
    setFormValue({
      ...form,
      ...fieldState
    });
  };

  const { name, type } = form;
  // that way we can pass the values into each component
  const values = { name, type };

  return (
    <FormDetails
      /*you need to get the value of the nav */
      sectionType={sectionType}
      // type={type}
      changeHandler={changeHandler}
      values={values}
    />
  );
}

export default CustomForm;
