import React, { useState } from "react";
import FormCenterDetails from "./FormCenterDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function CenterForm() {

  const [form, setFormValue] = useState({name: '', type: {}});
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
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

    const { name, type } = form;
    // that way we can pass the values into each component
    const values = { name, type };
    switch (step) {
      case 1:
        return (
          <FormCenterDetails
            type={type}
            nextStep={nextStep}
            prevStep={prevStep}
           changeHandler={changeHandler}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
          type={type}
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
    }
}

export default CenterForm;
