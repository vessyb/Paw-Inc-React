import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // this binding is necessary to make "this" work in the callback
   // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <div>
        {// if the value is true, show what's after the ampersands
        this.state.on && this.props.children}
        <button onClick={this.handleClick}>Register</button>
      </div>
    );
  }
}
