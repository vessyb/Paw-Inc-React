import React, { Component } from "react";
import FormAnimalDetails from "./FormAnimalDetails";

export class AnimalForm extends Component {
  state = {
    step: 1,
    name: "",
    type: "",
    centerName: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Handle fields change
  // take in input, also we have an event parameter
  handleChange = input => e => {
    // take whatever the input is and set it to whatever the value is
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { name, type, centerName } = this.state;
    const values = { name, type, centerName };
    switch (step) {
      case 1:
        return (
          <FormAnimalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        <h1>Confirm</h1>;
      case 3:
        <h1>Success</h1>;
    }
  }
}

export default AnimalForm;
