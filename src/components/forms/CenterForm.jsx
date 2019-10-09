import React, { Component } from "react";
import FormCenterDetails from "./FormCenterDetails";
import Confirm from "./Confirm";
import Success from "./Success";


export class CenterForm extends Component {
  state = {
    step: 1,
    name: "",
    type: null
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  };

  render() {
    const { step } = this.state;
    const { name, type } = this.state;
    // that way we can pass the values into each component
    const values = { name, type };
    switch (step) {
      case 1:
        return (
          <FormCenterDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
    }
  }
}

export default CenterForm;
